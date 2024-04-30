export const conversionMap: {[key: string]: string[]} = {
    'content': ['userName', 'userId', 'userMention', 'userTag', 'channelName', 'channelId', 'channelMention'],
    'authorName': ['userName', 'userId', 'userTag', 'channelName', 'channelId'],
    'authorIconUrl': ['userAvatarURL'],
    'color': ['discordBlurple', 'discordFuchsia', 'discordGreen', 'discordRed', 'discordYellow', 'randomColor'],
    'description': ['userName', 'userId', 'userMention', 'channelName', 'channelId', 'channelMention'],
    'fieldName': ['userName', 'userId', 'channelName', 'channelId', 'channelMention'],
    'fieldValue': ['userName', 'userId', 'userMention', 'channelName', 'channelId', 'channelMention'],
    'footerText': ['userName', 'userId', 'channelName', 'channelId'],
    'footerIconUrl': ['userAvatarURL'],
    'imageUrl': ['userAvatarURL'],
    'thumbnailUrl': ['userAvatarURL'],
    'timestamp': ['currentTime'],
    'title': ['userName', 'userId', 'channelName', 'channelId', 'channelMention']
}