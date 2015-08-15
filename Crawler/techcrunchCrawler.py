import urllib2
from bs4 import BeautifulSoup

urlBase = "http://www.techcrunch.com/"
pages = ["", "page/2","page/3","page/4","page/5"]

oFile = open("/Users/brianlai/Desktop/dataset/techcrunch.txt", 'wb')




for page in pages:
    url = urlBase+page

    content = urllib2.urlopen(url).read()

    soup = BeautifulSoup(content, "html.parser")


    articles = soup.find_all('a')
    hrefPrev = "1"

    for article in articles:
        try:
            href = str(article['href'])

            # remove non-articles from list
            if href.startswith('http') and not href.endswith("comments"):

                # try:
                #     # remove videos from list
                #
                #
                # except:

                    # do not print repeats.
                    if href != hrefPrev:
                        oFile.write(str(href) + '\n')
                    hrefPrev = href

        except:
            pass
