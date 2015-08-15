import urllib2
from bs4 import BeautifulSoup

url = "http://www.nytimes.com/pages/business/index.html"
oFile = open("/Users/brianlai/Desktop/dataset/nyt.txt", 'wb')


content = urllib2.urlopen(url).read()

soup = BeautifulSoup(content, "html.parser")


articles = soup.find_all('a')
hrefPrev = "1"

for article in articles:
    try:
        href = str(article['href'])

        # remove non-articles from list
        if href.startswith('http') and not href.endswith("comments"):

            try:
                # remove videos from list
                href.index('myaccount')

            except:

                # do not print repeats.
                if href != hrefPrev:
                    oFile.write(str(href) + '\n')
                hrefPrev = href

    except:
        pass
