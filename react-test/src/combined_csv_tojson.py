import csv
import json


with open("combined_gw_4.csv") as f1:
    reader1 = csv.reader(f1)
    with open("outputcombined_4.csv", "w") as g:
        writer = csv.writer(g)
        for i, row in enumerate(reader1):
            if i > 0:
                new_row = row[1:2] + [" ".join([row[2], row[3]])] + row[4:5] + row[6:]
                writer.writerow(new_row)

csvfile = open("outputcombined_4.csv", "r")
jsonfile = open("combined_gw_4.json", "w")
team_a_str = "team_a_score_"
team_h_str = "team_h_score_"
val_str = "value_"
total_str = "total_points_"
fieldnames_lst = ["position", "name", "team"]
for i in range(1, 39):
    fieldnames_lst.append(team_a_str + str(i))
    fieldnames_lst.append(team_h_str + str(i))
    fieldnames_lst.append(val_str + str(i))
    fieldnames_lst.append(total_str + str(i))
fieldnames = tuple(fieldnames_lst)
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)
