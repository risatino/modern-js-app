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

# Latest Updates

from django.utils.translation import ugettext_lazy as _
from livesettings import config_register, BooleanValue, ConfigurationGroup, MultipleStringValue, LongStringValue

ORGANIZATION_GROUP = ConfigurationGroup(
    'Organization',
    _('Organization Settings'),
    ordering=0,
)

config_register(BooleanValue(
    ORGANIZATION_GROUP,
    'PROGRAMS_ENABLE_TWITTER_PROMO',
    description=_('Twitter Breakout For Programs'),
    help_text=_('Remove tweets from \'Whats New\' feed and put them into their own sidebar promo or tab.'),
    default=False,
    ordering=0,
))

config_register(MultipleStringValue(
        ORGANIZATION_GROUP,
        'PROGRAMS_TWITTER_PROMO_TYPE',
        description=_("Breakout Type"),
        help_text=_("If tweets are broken out, should they be in a sidebar promo or a separate tab."),
        choices=[('sidebar',_('Sidebar')),
                 ('tab',_('Tab'))],
        default="sidebar",
        ordering=1,
    ))
    
config_register(LongStringValue(
    ORGANIZATION_GROUP,
    'RESEARCH_NETWORKS_BANNER_TEXT',
    description=_('Research Networks banner text'),
    help_text=_('Banner text to be displayed on Research Networks page.'),
    ordering=2,
    default='''
<p class="callout">The Foundation supports interdisciplinary research networks, "research institutions without walls," on topics related primarily to human and community development. They are Foundation-initiated projects that bring together highly talented individuals from a spectrum of disciplines, perspectives, and research methods. The networks examine problems and address empirical questions that will increase the understanding of fundamental social issues and are likely to yield significant improvements in policy and practice.
</p>
'''
))
