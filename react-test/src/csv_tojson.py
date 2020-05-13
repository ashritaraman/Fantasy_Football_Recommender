import csv
import json


with open("mid.csv") as f1:
    reader1 = csv.reader(f1)
    with open("outputmid.csv", "w") as g:
        writer = csv.writer(g)
        for row in reader1:
            new_row = (
                [" ".join([row[2], row[3]])] + [" ".join([row[2], row[3]])] + row[5:]
            )
            writer.writerow(new_row)

csvfile = open("outputmid.csv", "r")
jsonfile = open("player_mid.json", "w")
fieldnames = ("text", "value", "key")
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)
