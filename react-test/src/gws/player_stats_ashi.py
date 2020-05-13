import pandas as pd 
from pandas import DataFrame
import numpy as np
import tqdm


lst_big = []

# for i in range(1,39):
#     csv_name = "gw" +str(i) + ".csv"

#round not in col?
player_stats_csv = "player_stats.csv"
lst_temp = ['Name','Assists','attempted_passes','big_chances_created',
    'bps','clean_sheets','clearances_blocks_interceptions','completed_passes',
    'creativity','dribbles','element','errors_leading_to_goal', 'goals_conceded',
    'goals_scored','ict_index','influence','key_passes','penalties_conceded',
    'penalties_missed','penalties_saved', 'red_cards', 'saves','Total Points',
    'value','winning_goals','yellow_cards']
df = pd.read_csv(player_stats_csv, usecols = lst_temp)
    
#get player names

def formatnames():
    nlist = []
    for names in df['Name']:
        names = names.replace("_", " ")
        names = ''.join([i for i in names if not i.isdigit()])
        nlist.append(names)
    return nlist

def player_id_gen():
    idlist = []
    for names in df['Name']:
        names = names[-3:]
        names = ''.join([i for i in names if i.isdigit()])
        idlist.append(int(names))
    return idlist

formatnamelist = formatnames()
df["formatted_name"] = formatnamelist

playeridlist = player_id_gen()
df["player_id"] = playeridlist
sorted_df = df.sort_values(by=["player_id"])
vcount = sorted_df['player_id'].value_counts()
sorted_df = sorted_df[~sorted_df['player_id'].isin(vcount[vcount != 38].index)]


groups = sorted_df.groupby('player_id')
for idval, group in groups:
    for i in range (0, 32): #want to skip last gw?
        groupseg = group[i:i+5]
        groupsegmean = groupseg.mean(axis=0)
        print(groupsegmean)

# groupsegmean.to_csv('averages.csv')


    

# start = 0 #gameweek 1
# end = 5
#print(sorted_df[33:38]) #last 5
# for name in formatnamelist:
#     numocc = len(sorted_df['formatted_name'] == name)
#     print(numocc)
    # if (numocc < 38):
    #     sorted_df.drop(index)

# print(sorted_df)

    # if (sorted_df.iloc[end-1, :]['formatted_name'] != sorted_df.iloc[end, :]['formatted_name']):
#         start = end
#         end = start+5

#     currows = sorted_df[start:end]
#     #print(sorted_df)
#     # avg = currows._get_numeric_data().mean(axis=0)
#     # curname = currows['formatted_name']
#     # print(curname)
#     # print(name, end+1, avg)
    
#     start+=1
#     end+=1
    



#     df.loc[df['column_name'] == 'name']

#     df_list = df.values.tolist()
#     for elem in df_list:
#         lst_big.append(elem)
    
# col_headers = ['Name','Assists','attempted_passes','big_chances_created',
#     'bps','clean_sheets','clearances_blocks_interceptions','completed_passes',
#     'creativity','dribbles','element','errors_leading_to_goal','goals_conceded',
#     'goals_scored','ict_index','influence','key_passes','penalties_conceded',
#     'penalties_missed','penalties_saved', 'red_cards','game_week','saves','Total Points',
#     'value','winning_goals','yellow_cards']

# df_2 = pd.DataFrame(lst_big, columns = col_headers)
# df_2.to_csv("player_stats.csv")