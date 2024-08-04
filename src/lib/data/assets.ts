import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

// Logos
const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

// Images
const im = (file: string) => `${base}/images/${file}`;

const b = (light: string, dark?: string): Asset =>
	dark ? { dark: im(dark), light: im(light) } : im(light);

const Assets = {
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Kafka: a('kafka.svg'),
	Neo4j: a('neo4j.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Rust: a('rust.svg', 'rust-dark.png'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetes.svg'),
	Csharp: a('csharp.svg'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	NestJs: a('nest.svg'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	AdonisJs: a('adonis.png'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Jest: a('jest.png'),
	Unocss: a('unocss.svg'),
	Ruvy: a('ruvy.svg'),
	Postcss: a('postcss.svg'),
	PHP: a('php.png'),
	BC: a('BC.jpg'),
	CSUB: a('CSUB.png'),
	Scribble: a('scrib_icon.png'),
	Bass: a('bass.png'),
};

const Images = {
	// Scribble
	ScribLogin: b('Scribble/Login.png'),
	ScribChat: b('Scribble/Chatroom.png'),
	ScribProfile: b('Scribble/Profile.png'),
	ScribClass: b('Scribble/create-class.png'),
	ScribPersonal: b('Scribble/notes-personal.png'),
	ScribCollab: b('Scribble/notes-collab.png'),
	ScribGif: b('Scribble/chatroom-gifs.png'),
	// Inform A Fish
	IAFLogin: b('IAF/Login.png'),
	IAFHome: b('IAF/HomePage.png'),
	IAFCatches: b('IAF/Catches.png'),
	IAFWeather: b('IAF/Weather.png'),
	IAFAdmin: b('IAF/Admin.png'),
	IAFUserMan: b('IAF/UserManagement.png'),
	// Data Analysis Engine
	DAEMenu: b('DAE/Menu.png'),
	DAELoad: b('DAE/Load-Data.png'),
	DAEExplore: b('DAE/Explore-Data.png'),
	DAEDesc: b('DAE/Desc-Col.png'),
	DAEDescMonth: b('DAE/Desc-Month.png'),
	DAESortMonth: b('DAE/Sort-Vals-Month.png'),
	DAEDistMonth: b('DAE/Distinct-Vals-Month.png')
};

export default Assets;
export { Images };

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
