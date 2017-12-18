import pytz

tz_choices = []
for tz in pytz.all_timezones:
    tz_choices.append((tz.replace('/','_').lower(), tz))
tz_choices = tuple(tz_choices)

# shortcut one line version // place in models.py file in macarthur_cms

tz_choices = tuple((tz.replace('/','_').lower(),tz) for tz in pytz.all_timezones)
