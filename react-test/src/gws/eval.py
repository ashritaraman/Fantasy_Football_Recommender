import pandas as pd
import numpy as np
import restrictions as rs
import ranked_players as rp



def evaluate_team_score(team, gw):
    csv_name = "gw"+str(gw)+".csv"
    df = pd.read_csv(csv_name, usecols = ['name','total_points'], encoding = "cp1252")
    df_list = df.values.tolist()
    score = 0
    for elem in df_list:
        for player_id in team:
            if rp.name_parse(elem[0]) == player_id:
                score = score + elem[1]
    return score

team = rs.team 
gw = rs.gw 

cost = evaluate_team_score(team,gw)
print(cost)

