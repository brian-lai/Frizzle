import pymysql

workspace = "/Users/brianlai/Documents/Github/Frizzle/Crawler/dataset/"

filenames = ['business.txt', 'health.txt', 'politics.txt', 'tech.txt']



db = pymysql.connect(host='frizzledbinstance.cqc8vwkyuxtk.ap-southeast-1.rds.amazonaws.com',
                     user = 'frizzle_admin',
                     password='password',
                     db='frizzle_db')

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
