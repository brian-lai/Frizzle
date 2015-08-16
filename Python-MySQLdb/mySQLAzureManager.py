import pymysql

workspace = "/Users/brianlai/Documents/Github/Frizzle/Crawler/dataset/"

filenames = ['business.txt', 'health.txt', 'politics.txt', 'tech.txt']



db = pymysql.connect(host='us-cdbr-azure-west-c.cloudapp.net',
                     user = 'bf97f690b2966b',
                     password='c51c20e4',
                     db='as_1fadd35133f200a')

cur = db.cursor()

for filename in filenames:
    keyword = filename[:-4]
    iFile = workspace+filename
    reader = open(iFile, 'r')
    for url in reader:
        if len(url) < 255:
            sql = "INSERT INTO CONTENT_KEYWORD_MAP (Keyword, url) VALUES (%s, %s);"
            cur.execute(sql, (keyword, url))


db.commit()
