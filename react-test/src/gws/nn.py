import pandas as pd 
import csv      
import numpy as np
import tensorflow as tf
import keras
from keras.layers import Dense, Activation
import torch

# Reverse a string 
def rev_str(s):
    strg_temp = ''
    for i in s:
        strg_temp = i+strg_temp
    return strg_temp

#player_stats_array = player_stats.values
def name_parse(nm):
    nm = rev_str(nm)
    i = nm.find('_')
    id = nm[:i]
    id = rev_str(id)
    try:
        return (int(id))
    except:
        pass


gw = 6

# player_stats = pd.read_csv('player_stats.csv' , usecols= ['Name','Assists','big_chances_created','clean_sheets','clearances_blocks_interceptions','dribbles','errors_leading_to_goal','ict_index','key_passes','penalties_missed','penalties_saved','game_week','Total Points'])
# player_stats_list = player_stats.values.tolist()

weightages = [0.4,0.3,0.15,0.1,0.05]

def make_training_csv(gw):
    gw_1 = [] 
    gw_2 = [] 
    gw_3 = []
    gw_4 = [] 
    gw_5 = [] 
    while gw<39:
        for i in range(gw-5,gw):
            gw_csv_name = "gw" + str(i) +".csv"
            gw_stats = pd.read_csv(gw_csv_name, usecols= ['Name','Assists','big_chances_created','clean_sheets','clearances_blocks_interceptions','dribbles','errors_leading_to_goal','ict_index','key_passes','penalties_missed','penalties_saved','game_week','Total Points'],encoding = "cp1252")




        gw=gw+1
    return df_list




df_2 = pd.DataFrame(df_list, columns = ['Position','first_name','second_name','team','player_id'])
df_2.to_csv("nn_train.csv")