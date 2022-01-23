initSidebarItems({"constant":[["COMMUNICATION_DISABLED_MAX_DURATION","Maximum amount of time a member can be timed out for."],["CREATE_GUILD_BAN_DELETE_MESSAGE_DAYS_MAX","Maximum amount of days for messages to be deleted upon ban."],["GET_CHANNEL_MESSAGES_LIMIT_MAX","Maximum amount of messages to get."],["GET_CHANNEL_MESSAGES_LIMIT_MIN","Minimum amount of messages to get."],["GET_CURRENT_USER_GUILDS_LIMIT_MAX","Maximum amount of guilds to get."],["GET_CURRENT_USER_GUILDS_LIMIT_MIN","Minimum amount of guilds to get."],["GET_GUILD_AUDIT_LOG_LIMIT_MAX","Maximum amount of audit log entries to list."],["GET_GUILD_AUDIT_LOG_LIMIT_MIN","Minimum amount of audit log entries to list."],["GET_GUILD_MEMBERS_LIMIT_MAX","Maximum amount of guild members to list."],["GET_GUILD_MEMBERS_LIMIT_MIN","Minimum amount of guild members to list."],["GET_REACTIONS_LIMIT_MAX","Minimum amount of users to return when getting reactions."],["GET_REACTIONS_LIMIT_MIN","Maximum amount of users to return when getting reactions."],["GUILD_NAME_LENGTH_MAX","Maximum length of a guild’s name."],["GUILD_NAME_LENGTH_MIN","Minimum length of a guild’s name."],["GUILD_PRUNE_DAYS_MAX","Maximum amount of days to prune users from a guild."],["GUILD_PRUNE_DAYS_MIN","Minimum amount of days to prune users from a guild."],["INVITE_AGE_MAX","Maximum length of an invite’s age, in seconds."],["INVITE_USES_MAX","Maximum uses of an invite, if not unlimited."],["NICKNAME_LIMIT_MAX","Maximum length of a maximum."],["NICKNAME_LIMIT_MIN","Minimum length of a nickname."],["SCHEDULED_EVENT_DESCRIPTION_MAX","Maximum length of a scheduled event’s description."],["SCHEDULED_EVENT_DESCRIPTION_MIN","Minimum length of a scheduled event’s description."],["SCHEDULED_EVENT_GET_USERS_MAX","Maximum amount of scheduled event users to get."],["SCHEDULED_EVENT_GET_USERS_MIN","Minimum amount of scheduled event users to get."],["SCHEDULED_EVENT_NAME_MAX","Maximum length of a scheduled event’s name."],["SCHEDULED_EVENT_NAME_MIN","Minimum length of a scheduled event’s name."],["SEARCH_GUILD_MEMBERS_LIMIT_MAX","Maximum amount of guild members to search for."],["SEARCH_GUILD_MEMBERS_LIMIT_MIN","Minimum amount of guild members to search for."],["STAGE_TOPIC_LENGTH_MAX","Maximum stage instance topic length."],["STAGE_TOPIC_LENGTH_MIN","Minimum stage instance topic length."],["TEMPLATE_DESCRIPTION_LENGTH_MAX","Maximum length of a guild template description."],["TEMPLATE_NAME_LENGTH_MAX","Maximum length of a guild template name."],["TEMPLATE_NAME_LENGTH_MIN","Minimum length of a guild template name."],["USERNAME_LIMIT_MAX","Maximum length of a username."],["USERNAME_LIMIT_MIN","Minimum length of a username."]],"enum":[["ValidationErrorType","Type of [`ValidationError`] that occurred."]],"fn":[["communication_disabled_until","Validate that a timeout time is not too far in the future."],["create_guild_ban_delete_message_days","Ensure that the delete message days amount for the Create Guild Ban request is correct."],["get_channel_messages_limit","Ensure that the limit for the Get Channel Messages request is correct."],["get_current_user_guilds_limit","Ensure that the limit for the Get Current User Guilds request is correct."],["get_guild_audit_log_limit","Ensure that the limit for the Get Guild Audit Log endpoint is correct."],["get_guild_members_limit","Ensure that the limit for the Get Guild Members endpoint is correct."],["get_reactions_limit","Ensure that the limit for the Get Reactions endpoint is correct."],["guild_name","Ensure that a guild name’s length is correct."],["guild_prune_days","Ensure that the days to prune members from a guild is correct."],["invite_max_age","Ensure that the invite max age is correct."],["invite_max_uses","Ensure that the invite max uses is correct."],["nickname","Ensure that the nickname length is correct."],["scheduled_event_description","Ensure that a scheduled even’t description is correct."],["scheduled_event_get_users","Ensure that a scheduled event get users limit amount is correct."],["scheduled_event_name","Ensure that a scheduled even’t name is correct."],["search_guild_members_limit","Ensure that the limit for the Search Guild Members endpoint is correct."],["stage_topic","Ensure that the stage instance topic length is correct."],["template_description","Ensure that a guild template’s description length is correct."],["template_name","Ensure that a guild template’s name length is correct."],["username","Ensure that the username length is correct."]],"struct":[["ValidationError","A field is not valid."]]});