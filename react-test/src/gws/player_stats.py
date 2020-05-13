import pandas as pd 
from pandas import DataFrame
import numpy 
import tqdm


lst_big = []

for i in range(1,39):
    csv_name = "gw" +str(i) + ".csv"
    lst_temp = ['name','assists','attempted_passes','big_chances_created',
    'bps','clean_sheets','clearances_blocks_interceptions','completed_passes',
    'creativity','dribbles','element','errors_leading_to_goal','goals_conceded',
    'goals_scored','ict_index','influence','key_passes','penalties_conceded',
    'penalties_missed','penalties_saved', 'red_cards','round','saves','total_points',
    'value','winning_goals','yellow_cards']
    df = pd.read_csv(csv_name, usecols = lst_temp, encoding = "cp1252")
    df_list = df.values.tolist()
    for elem in df_list:
        lst_big.append(elem)
    # print(df_list)
# print(lst_big)
# print(df_list)
col_headers = ['Name','Assists','attempted_passes','big_chances_created',
    'bps','clean_sheets','clearances_blocks_interceptions','completed_passes',
    'creativity','dribbles','element','errors_leading_to_goal','goals_conceded',
    'goals_scored','ict_index','influence','key_passes','penalties_conceded',
    'penalties_missed','penalties_saved', 'red_cards','game_week','saves','Total Points',
    'value','winning_goals','yellow_cards']

df_2 = pd.DataFrame(lst_big, columns = col_headers)
df_2.to_csv("player_stats.csv")