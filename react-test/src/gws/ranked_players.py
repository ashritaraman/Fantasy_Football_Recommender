import pandas as pd
import numpy as np
import csv 
from pandas import DataFrame


# Reversing a string
def rev_str(s):
    strg_temp = ''
    for i in s:
        strg_temp = i+strg_temp
    return strg_temp

# Parsing the player_ids from the given format in the data
def name_parse(nm):
    nm = rev_str(nm)
    i = nm.find('_')
    id = nm[:i]
    id = rev_str(id)
    try:
        return (int(id))
    except:
        print("Id not available")

# Sort a given list in descending order
def sort_list (lst):
    lst.sort(reverse = True)
    return lst




"""
Take the gameweek, as an input and output a ranked list for 
each position
"""
def rank_players(gw):
    lst_1 = []
    lst_2 = []
    lst_3 = []
    rank_players_lst = []
    if gw==1: 
        pass
    elif gw==2:
        pass
    elif gw==3: 
        pass
    else:
        csv_names = [ "gw"+str(gw-1)+".csv","gw"+str(gw-2)+".csv","gw"+str(gw-3)+".csv"]
        name_count = 0
        for name in csv_names:
            df = pd.read_csv(name, usecols = ['name','ict_index'], encoding = "cp1252")
            df_list = df.values.tolist()
            if name_count==0:
                lst_1 = df_list
            if name_count==1:
                lst_2 = df_list
            if name_count ==2: 
                lst_3 = df_list
            name_count = name_count+1
        for x in lst_1:
            for y in lst_2:
                for z in lst_3:
                    if (x[0]==y[0] and y[0]==z[0]):
                        avg = (x[1]+y[1]+z[1])/3
                        rank_players_lst.append([x[0],avg])
                    
        data_list = []
        for player in rank_players_lst:
            data_list.append(player[1])
        sort_list(data_list)
        lst_1 = rank_players_lst
        rank_players_lst = []
        for data_point in data_list:
            for x in lst_1:
                if x[1] == data_point:
                    rank_players_lst.append(x)
    
    # print(rank_players_lst)
    # for frick in rank_players_lst:
    #     if frick[1] != 0.0:
    #         print(frick[0])
    return rank_players_lst
    
    

def pos_ranked_players (pos, gw):
    gk_ranked = []
    def_ranked = []
    mid_ranked = []
    fwd_ranked = []
    player_id_list = []
    rank_players_lst = rank_players(gw)
    for elem in rank_players_lst:
        player_id = name_parse(elem[0])
        player_id_list.append(player_id)
    df_gk = pd.read_csv('gk.csv', usecols = ['player_id'])
    df_list_gk = df_gk.values.tolist()
    for elem in player_id_list:
        lst_temp = []
        lst_temp.append(elem)
        if lst_temp in df_list_gk:
            gk_ranked.append(lst_temp[0])
    
    df_def = pd.read_csv('def.csv', usecols = ['player_id'])
    df_list_def = df_def.values.tolist()
    for elem in player_id_list:
        lst_temp = []
        lst_temp.append(elem)
        if lst_temp in df_list_def:
            def_ranked.append(lst_temp[0])
    
    df_mid = pd.read_csv('mid.csv', usecols = ['player_id'])
    df_list_mid = df_mid.values.tolist()
    for elem in player_id_list:
        lst_temp = []
        lst_temp.append(elem)
        if lst_temp in df_list_mid:
            mid_ranked.append(lst_temp[0])

    df_fwd = pd.read_csv('fwd.csv', usecols = ['player_id'])
    df_list_fwd = df_fwd.values.tolist()
    for elem in player_id_list:
        lst_temp = []
        lst_temp.append(elem)
        if lst_temp in df_list_fwd:
            fwd_ranked.append(lst_temp[0])
    if pos ==1:
        return gk_ranked
    if pos==2:
        return def_ranked
    if pos==3:
        return mid_ranked
    if pos==4:
        return fwd_ranked
    

# Generates a ranked player-name list from ranked player id-list
def player_name_gen (ranked_id_list):
    df = pd.read_csv('player_idlist.csv', usecols = ['first_name','second_name','id'])
    df_list = df.values.tolist()  
    idlist = []  
    for elem in df_list:
        idlist.append(elem[2])
    
    index_list = []
    for elem in ranked_id_list:
        id = idlist.index(elem)
        index_list.append(id)
    
    names_list = []
    for elem in index_list:
        first = df_list[elem][0]
        last = df_list[elem][1]
        
        name = first +' '+ last
        
        names_list.append(name)
    
    return names_list


def delete_dups (l):
    return list( dict.fromkeys(l))

# names_list = delete_dups(player_name_gen(pos_ranked_players(4,19)))
(pos_ranked_players(2,35))
