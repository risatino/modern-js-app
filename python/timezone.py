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

# /organization/config.py
# add LongStringValue to Research Network views.py details

config_register(LongStringValue(
+    ORGANIZATION_GROUP,
+    'RESEARCH_NETWORKS_BANNER_TEXT',
+    description=_('Research Networks banner text'),
+    help_text=_('Banner text to be displayed on Research Networks page.'),
+    ordering=2,
+    default='''
+<p>The Foundation supports interdisciplinary research networks, "research
+institutions without walls," on topics related primarily to human and community 
+development. They are Foundation-initiated projects that bring together highly 
+talented individuals from a spectrum of disciplines, perspectives, and research 
+methods. The networks examine problems and address empirical questions that will 
+increase the understanding of fundamental social issues and are likely to yield 
+significant improvements in policy and practice.
+</p>
+'''
+))
