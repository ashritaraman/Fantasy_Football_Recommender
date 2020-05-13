team_list = []
i=1
while i<21:
    team_list.append(0)
    i=i+1
df = pd.read_csv("player_bio.csv", usecols = ['team', 'player_id'])
df_list = df.values.tolist()
for elem in df_list:
    if elem[1] in team:
        ind = df_list.index(elem)
        team_id = df_list[ind][0]
        team_list[team_id-1] = team_list[team_id-1]+1 
print(team_list)