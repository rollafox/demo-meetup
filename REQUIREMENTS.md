# Minimum Requirements

- The app must consist of at least two screens, a Groups screen and a Settings screen. The Settings screen lets the user specify one preferred group category (https://www.meetup.com/meetup_api/docs/2/categories/)which must be stored locally (cache). This information will be used and displayed on the second screen.
- The second screen should display a list of meetup groups taking place in Johannesburg (https://www.meetup.com/meetup_api/docs/find/groups/). This request must use the preferred category the user specified in the Settings screen (if any), as well as displaying the preferred category (if any) appropriately so that the user knows which categories he/she is filtering by.
- Additionally the user must be able to specify other categories to filter groups by, as one group could have multiple categories.
- The Settings and Groups screens must have their own controllers/javascript files.
- Meetup.com’s API requires authentication to access. You can find how to authenticate your website here. To keep this assessment short we suggest using API key’s, however, please note that meetup.com does not return any CORS headers when using API keys. You can read up more about that here, and we suggest this as a possible workaround if you don’t want to use OAuth.

> ## Example
> Fred is a very active guy who lives in Johannesburg. He opens up the website and goes to the Settings screen where he specifies ‘Outdoors’ as his default category, because most meetups he wants to attend are outdoor meetups. When he goes to the Groups screen, before he does his request he specifies ‘Music’ as another category. He then performs his request and sees all Groups in the ‘Music’ and ‘Outdoors’ categories in Johannesburg