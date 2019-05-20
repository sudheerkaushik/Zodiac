# Zodiac 
A NativeScript app to see Zodiac facts build for Android. NativeScript rocks!  :sparkles: 
[Download Debug APK here](https://drive.google.com/file/d/1dmVcHs6JJW8aNCmrb1VyGsjytURMoF4j/view)

<img src="https://drive.google.com/uc?export=view&id=1TAFT5ohWNU5E2OwXFWEK4BUI08Dz94Ar" width="350">

## Flashback
>It was a sunny day, a beautiful sunny day. My first meetup with [JSLovers]( https://twitter.com/jslovers_del) was on this very day. We were destined to meet. And there, I met Nativescript and we've been in love since then :heart::heart::heart::heart::heart:

## Back to Present
ok enough. So I do like Nativescript but I haven't made much with it. So I am repeating the same boring idea of making a Horoscope App with it. But this time, with real APIs :smile:


<img src="https://drive.google.com/uc?export=view&id=1AK2_xsULDXxD7CYwq3q_ffV8u3PKKalo" width="350">


## What's Inside

Four pages:
1. Home
2. Daily Horoscope page (Will add tabs for monthly and weekly very soon)
3. Factlist page (shows same 12 zodiac signs here)
4. FactDetails page, which shows you some interesting facts about your zodiac sign

## Technically, it includes

- A Side drawer navigation
- Four ~~blank~~ Filled pages hooked to the drawer navigation
- ~~Customizable~~ Blue theme (will add option in setting page to change color to Pink, My favourite color)
- ~~UX and development best practices~~ poorly written code, like a noob
- Easy to understand code (kidding :wink:)

<img src="https://drive.google.com/uc?export=view&id=1DwM7uoFzTMUlchLSOjjFGbMWdauYz6qF" width="350">


## Things to make it work

Make sure you have
1. [Nativescript Sidekick](https://www.nativescript.org/nativescript-sidekick) from here. Quite useful. You don't have to beat keyboard to death while using terminal or command prompt. Just click and Drive

2. Vscode is preferred, you can use Sublime as well
3. Sound knowledge of Typscript
4. Keep a tab open in Chrome, which should show you documentation about Nativescript UI components (Div soup is prohibited)


### Architecture

The RadSideDrawer component is set up as an application starting point in:

- `/app-component.ts` - sets up the side drawer content and defines a page router outlet for the pages.

RadSideDrawer has the following component structure:

- `RadSideDrawer` - The component to display a drawer on the page.
- `tkDrawerContent` directive - Marks the component that will hold the drawer content.
- `tkMainContent` directive - Marks the component that will hold the app main content.

There are five blank components located in these folders:

- `/home`
- `/horoscopeDetails`
- `/factlist`
- `/factdetails`

### Styling

This template is set up to use SASS for styling. All classes used are based on the {N} core theme – consult the [documentation](https://docs.nativescript.org/angular/ui/theme.html#theme) to understand how to customize it. Check it out to see what classes you can use on which component.

It has 4 global style files that are located at the root of the app folder:

- `_app-variables.scss` - holds the global SASS variables that are imported on each component's styles.
- `_app-common.scss` - the global common style sheet. These style rules are applied to both Android and iOS.
- `app.android.scss` - the global Android style sheet. These style rules are applied to Android only.
- `app.ios.scss` - the global iOS style sheet. These style rules are applied to iOS only.

## Next in List
1. Making Factlist services(will be free, But I can't assure daily updation)
2. Setting page to change theme color (Pink color is my fav)
3. About page for direct/indirect contributors
4. Logo creation for app
5. Code beautification and minification

## Get Help


Feel free to give any suggestion or open a bug

## Contributing

1. [Horoscope API](https://github.com/tapaswenipathak/Horoscope-API) by [Tapasweni Pathak](https://github.com/tapaswenipathak/Horoscope-API)
2. App design and Development by [Sudhir Kaushik](https://github.com/SudhirKaushik)

<!-- 
## Sources:

Create Icons and splash screens from here:
http://nsimage.brosteins.com/

Preview images of man holding my app:
http://dunnnk.com/?ref=producthunt#0 -->
