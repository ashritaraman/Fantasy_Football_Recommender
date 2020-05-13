import pandas as pd


def extractId(name_lst):
    id_lst = []
    for name in name_lst:
        name_no_list = name[0]
        indexOfDash = name_no_list.rfind("_")
        pid = name_no_list[indexOfDash + 1 :]
        id_lst.append(pid)
    return id_lst


def checkIDDups(id_lst, team_a_score_lst, team_h_score_lst, value_lst, total_points_lst):
    fin_id_lst = list()
    fin_a_score_lst = list()
    fin_h_score_lst = list()
    fin_val_lst = list()
    fin_total_lst = list()
    visited = set()

    for id in id_lst:
        if id not in visited:
            dup_index_lst = []  # list of indicies of all duplicates
            for j, idj in enumerate(id_lst):
                if idj == id:
                    dup_index_lst.append(j)
            # print(dup_index_lst)
            # now we have list of indices of duplicates for some id
            tot_a_score = 0
            tot_h_score = 0
            tot_val = 0
            tot_points = 0
            for dup_index in dup_index_lst:
                tot_a_score += team_a_score_lst[dup_index][0]
                tot_h_score += team_h_score_lst[dup_index][0]
                tot_val += value_lst[dup_index][0]
                tot_points += total_points_lst[dup_index][0]
            fin_id_lst.append(id)
            fin_a_score_lst.append((int(tot_a_score)))
            fin_h_score_lst.append((int(tot_h_score)))
            fin_val_lst.append((int(tot_val)))
            fin_total_lst.append(int(tot_points))
            visited.add(id)
    return fin_id_lst, fin_a_score_lst, fin_h_score_lst, fin_val_lst, fin_total_lst


df_final = pd.read_csv(
    "player_bio_copy.csv", usecols=["Position", "first_name", "second_name", "team"],
)
df_id = pd.read_csv("player_bio_copy.csv", usecols=["id"],)
dfid_list = df_id.values.tolist()
id_list = []
for id in dfid_list:
    id_list.append(str(id[0]))
df_final["id"] = id_list

for i in range(1, 39):
    path_name = "./gws/gw" + str(i) + ".csv"
    df_total = pd.read_csv(path_name, usecols=["total_points"])
    dfa_score = pd.read_csv(path_name, usecols=["team_a_score"])
    dfh_score = pd.read_csv(path_name, usecols=["team_h_score"])
    dfval = pd.read_csv(path_name, usecols=["value"])
    # df2 = pd.read_csv(path_name, usecols=["team_a_score", "team_h_score"])
    dfName = pd.read_csv(path_name, usecols=["name"])
    dfName_list = dfName.values.tolist()
    id_lst = extractId(dfName_list)
    team_a_score_lst = dfa_score.values.tolist()
    team_h_score_lst = dfh_score.values.tolist()
    team_val_list = dfval.values.tolist()
    total_points_lst = df_total.values.tolist()
    id_lst, team_a_score_lst, team_h_score_lst, team_val_list, total_points_lst = checkIDDups(
        id_lst, team_a_score_lst, team_h_score_lst, team_val_list, total_points_lst
    )
    df2 = pd.DataFrame(
        columns=["id", "team_a_score", "team_h_score", "value", "total_points"]
    )
    df2["id"] = id_lst
    df2["team_a_score"] = team_a_score_lst
    df2["team_h_score"] = team_h_score_lst
    df2["value"] = team_val_list
    df2["total_points"] = total_points_lst

    df_final = pd.merge(
        left=df_final, right=df2, how="left", left_on="id", right_on="id"
    )
    df_final["team_a_score"].fillna(0, inplace=True)
    df_final["team_h_score"].fillna(0, inplace=True)
    df_final["value"].fillna(0, inplace=True)
    df_final["total_points"].fillna(0, inplace=True)
    df_final = df_final.rename(
        columns={
            "team_a_score": "team_a_score_" + str(i),
            "team_h_score": "team_h_score_" + str(i),
            "value": "value_" + str(i),
            "total_points": "total_points_" + str(i),
        }
    )
# print(df_final)
df_final.to_csv("combined_gw_4.csv")
