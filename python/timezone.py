import pytz

tz_choices = []
for tz in pytz.all_timezones:
    tz_choices.append((tz.replace('/','_').lower(), tz))
tz_choices = tuple(tz_choices)

# shortcut one line version // place in models.py file in macarthur_cms

tz_choices = tuple((tz.replace('/','_').lower(),tz) for tz in pytz.all_timezones)

# remove lower case and just replace / and _

tz_choices = []
for tz in pytz.all_timezones:
    tz_choices.append((tz.replace('/','_'), tz))
tz_choices = tuple(tz_choices)

tz_choices = tuple((tz.replace('/','_'),tz) for tz in pytz.all_timezones)

# change timezone choices to reflect:
# (GMT) Greenwich mean time
# (EST) Eastern standard time
# (EDT) Eastern daylight time
# (CST) Central standard time
# (CDT) Central daylight time
# (MST) Mountain standard time
# (MDT) Mountain daylight time
# (PST) Pacific standard time
# (PDT) Pacific daylight time

# Works in apps/organization/models.py

timezone = models.CharField(_("Timezone"),
        choices=(
            ('GMT', _('(GMT) Greenwich mean time')), 
            ('EST', _('(EST) Eastern standard time')), 
            ('EDT', _('(EDT) Eastern daylight time')),
            ('CST', _('(CST) Central standard time')),
            ('CDT', _('(CDT) Central daylight time')),
            ('MST', _('(MST) Mountain standard time')),
            ('MDT', _('(MDT) Mountain daylight time')),
            ('PST', _('(PST) Pacific standard time')),
            ('PDT', _('(PDT) Pacific daylight time')),
        ),
        default='', 
        blank=True,
        max_length=256
    )
    
# xyz-1100 - Add a new article type called "40th Anniversary"
# /apps/articles/models.py line 50 and 250-ish
# add article type choice ('fam', '40th Anniversary'),
# add type pair ('fam', 'forty-anniversary'),
            
# xyz-1104 - Replaced all 'Research & Results' to 'Grantee Research'

