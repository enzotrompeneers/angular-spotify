webpackJsonp([0,3],{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SpotifyApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpotifyApiService = (function () {
    function SpotifyApiService(http) {
        this.http = http;
        this.baseUrl = "https://api.spotify.com/v1/";
    }
    SpotifyApiService.prototype.SearchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        console.log(str);
        this.searchUrl = this.baseUrl + 'search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=BE';
        return this.http.get(this.searchUrl)
            .map(function (res) { return res.json(); });
    };
    SpotifyApiService.prototype.getArtist = function (id) {
        this.artistUrl = this.baseUrl + 'artists/' + id;
        return this.http.get(this.artistUrl)
            .map(function (res) { return res.json(); });
    };
    SpotifyApiService.prototype.getAlbums = function (artistId) {
        this.albumsUrl = this.baseUrl + 'artists/' + artistId + '/albums';
        return this.http.get(this.albumsUrl)
            .map(function (res) { return res.json(); });
    };
    SpotifyApiService.prototype.getAlbum = function (id) {
        this.albumUrl = this.baseUrl + 'albums/' + id;
        return this.http.get(this.albumUrl)
            .map(function (res) { return res.json(); });
    };
    SpotifyApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], SpotifyApiService);
    return SpotifyApiService;
    var _a;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/spotify-api.service.js.map

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SONGS } from './../models/mock-songs'; // local
var SongService = (function () {
    function SongService(http) {
        this.http = http;
        this.songsUrl = 'api/songs';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SongService.prototype.handleError = function (error) {
        console.error(error);
        return Promise.reject(error.message);
    };
    /*
    getSongs():Promise<Song[]> {
      return Promise.resolve(SONGS);
    }
    */
    SongService.prototype.getSongs = function () {
        return this.http.get(this.songsUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SongService.prototype.create = function (artist, title, album) {
        return this.http.post(this.songsUrl, JSON.stringify({ artist: artist, title: title, album: album }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SongService.prototype.update = function (song) {
        var url = this.songsUrl + "/" + song.id;
        return this.http.put(url, JSON.stringify(song))
            .toPromise()
            .then(function () { return song; })
            .catch(this.handleError);
    };
    SongService.prototype.delete = function (id) {
        var url = this.songsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    SongService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], SongService);
    return SongService;
    var _a;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/song.service.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_spotify_api_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_song_service__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumComponent = (function () {
    function AlbumComponent(spotifyService, route, songService) {
        this.spotifyService = spotifyService;
        this.route = route;
        this.songService = songService;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.spotifyService.getAlbum(id)
                .subscribe(function (album) {
                _this.album = album;
            });
        });
    };
    AlbumComponent.prototype.add = function (artist, title, album) {
        var _this = this;
        this.songService.create(artist, title, album)
            .then(function (song) {
            _this.songs.push(song);
        });
    };
    AlbumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
            selector: 'app-album',
            template: __webpack_require__(680),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_spotify_api_service__["a" /* SpotifyApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_spotify_api_service__["a" /* SpotifyApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_song_service__["a" /* SongService */]) === 'function' && _c) || Object])
    ], AlbumComponent);
    return AlbumComponent;
    var _a, _b, _c;
}());
;
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/album.component.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_spotify_api_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistComponent = (function () {
    function ArtistComponent(spotifyService, route) {
        this.spotifyService = spotifyService;
        this.route = route;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.spotifyService.getArtist(id)
                .subscribe(function (artist) {
                _this.artist = artist;
            });
            _this.spotifyService.getAlbums(id)
                .subscribe(function (albums) {
                _this.albums = albums.items;
            });
        });
    };
    ArtistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
            selector: 'app-artist',
            template: __webpack_require__(682),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_spotify_api_service__["a" /* SpotifyApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_spotify_api_service__["a" /* SpotifyApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ArtistComponent);
    return ArtistComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/artist.component.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_song_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = (function () {
    function FavoritesComponent(songService) {
        this.songService = songService;
        this.isSaveActive = false;
        this.isCreateActive = false;
        this.editErrorMessage = false;
        this.errorMessage = false;
        this.warningMessage = false;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.getSongs();
    };
    FavoritesComponent.prototype.getSongs = function () {
        var _this = this;
        this.songService.getSongs().then(function (songs) { return _this.songs = songs; });
    };
    FavoritesComponent.prototype.onSelect = function (song) {
        this.selectedSong = song;
        this.isSaveActive = true;
    };
    FavoritesComponent.prototype.save = function (artist, title, album) {
        artist = artist.trim();
        title = title.trim();
        album = album.trim();
        if (!this.selectedSong.album) {
            this.selectedSong.album = "none";
        }
        if (!artist || !title) {
            this.editErrorMessage = true;
            return;
        }
        else {
            this.songService.update(this.selectedSong);
            this.isSaveActive = false;
            this.editErrorMessage = false;
        }
    };
    FavoritesComponent.prototype.onCreate = function () {
        this.isCreateActive = true;
    };
    FavoritesComponent.prototype.add = function (artist, title, album) {
        var _this = this;
        artist = artist.trim();
        title = title.trim();
        album = album.trim();
        if (!album) {
            album = "none";
        }
        if (!artist || !title || !album) {
            this.errorMessage = true;
            return;
        }
        else {
            this.songService.create(artist, title, album)
                .then(function (song) {
                _this.songs.push(song);
            });
            //this.isCreateActive = false;
            this.errorMessage = false;
            this.isCreateActive = false; // animation uitgezet
        }
    };
    FavoritesComponent.prototype.onDelete = function (song) {
        this.warningMessage = true;
        this.selectedSong = song;
    };
    FavoritesComponent.prototype.disableDelete = function () {
        this.warningMessage = false;
    };
    FavoritesComponent.prototype.delete = function (song) {
        var _this = this;
        this.songService.delete(song.id)
            .then(function () {
            _this.songs = _this.songs.filter(function (s) { return s !== song; });
            if (_this.selectedSong === song) {
                _this.selectedSong = null;
            }
        });
        this.warningMessage = false;
    };
    FavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
            selector: 'app-favorites',
            template: __webpack_require__(683),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_song_service__["a" /* SongService */]) === 'function' && _a) || Object])
    ], FavoritesComponent);
    return FavoritesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/favorites.component.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__(685),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/loading.component.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_api_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(spotifyService) {
        this.spotifyService = spotifyService;
    }
    SearchComponent.prototype.SearchMusic = function () {
        var _this = this;
        this.spotifyService.SearchMusic(this.searchStr)
            .subscribe(function (res) {
            _this.searchRes = res.artists.items;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(686),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_api_service__["a" /* SpotifyApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_spotify_api_service__["a" /* SpotifyApiService */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/search.component.js.map

/***/ },

/***/ 395:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 395;


/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(513);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/main.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(681),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/app.component.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorites_favorites_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_artist_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__album_album_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_spotify_api_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_in_memory_web_api__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_song_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_music_list_data_service__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__loading_loading_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_9__album_album_component__["a" /* AlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_15__loading_loading_component__["a" /* LoadingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["l" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_12_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__services_music_list_data_service__["a" /* MusicListDataService */], {
                    passThruUnknownUrl: true
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_spotify_api_service__["a" /* SpotifyApiService */], __WEBPACK_IMPORTED_MODULE_13__services_song_service__["a" /* SongService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/app.module.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_artist_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__album_album_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__search_search_component__["a" /* SearchComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_2__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'favorites/:id', component: __WEBPACK_IMPORTED_MODULE_2__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'artist/:id', component: __WEBPACK_IMPORTED_MODULE_3__artist_artist_component__["a" /* ArtistComponent */] },
    { path: 'album/:id', component: __WEBPACK_IMPORTED_MODULE_4__album_album_component__["a" /* AlbumComponent */] },
    { path: 'loading', component: __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/app.routes.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(684),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/header.component.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MusicListDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicListDataService = (function () {
    function MusicListDataService() {
    }
    MusicListDataService.prototype.createDb = function () {
        var songs = [
            { id: 1, artist: 'Michael Jackson', title: 'Love Never Felt so Good', album: 'XSCAPE' },
            { id: 2, artist: 'Barry White	', title: 'Loves theme', album: 'All Time Greatest Hits	edit	delete' },
            { id: 3, artist: 'Rihanna', title: 'Consideration', album: 'ANTI' },
            { id: 4, artist: 'Tourist LeMC', title: 'En Route', album: 'En Route (Deluxe)' }
        ];
        return { songs: songs };
    };
    MusicListDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MusicListDataService);
    return MusicListDataService;
}());
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/music-list-data.service.js.map

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/environment.js.map

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/EnzoTrompeneers/work/angular-spotify/src/polyfills.js.map

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = ".selected {\n  color: lightskyblue; }\n\nspan {\n  color: lightskyblue; }\n\ninput {\n  background-color: black;\n  color: white;\n  border-color: lightskyblue; }\n\nlabel {\n  color: white;\n  display: block;\n  width: 200px;\n  float: left; }\n\n.btn-success {\n  margin-bottom: 20px; }\n\n.keyframes {\n  margin: 10% auto;\n  display: block;\n  width: 500px;\n  height: 500px;\n  background-color: black;\n  border: 3px solid white;\n  position: absolute;\n  left: 30%;\n  text-decoration: none;\n  border-radius: 2%; }\n\n.login {\n  -webkit-animation: formulier 2s ease-in-out;\n          animation: formulier 2s ease-in-out; }\n\nform {\n  margin: auto;\n  padding: 0% 15%;\n  color: white; }\n\ninput[type=text], select {\n  width: 100%;\n  padding: 10px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\ninput[type=submit] {\n  width: 100%;\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer; }\n\ninput[type=submit]:hover {\n  background-color: #45a049; }\n\n@-webkit-keyframes formulier {\n  0% {\n    top: 0%; }\n  30% {\n    top: 5%; }\n  100% {\n    top: -70%; } }\n\n@keyframes formulier {\n  0% {\n    top: 0%; }\n  30% {\n    top: 5%; }\n  100% {\n    top: -70%; } }\n\n.blokje {\n  -webkit-transition: all linear 0.5s;\n  transition: all linear 0.5s;\n  width: 100%;\n  position: relative;\n  top: 0;\n  left: 0; }\n\n.ng-hide {\n  height: 0;\n  width: 0;\n  background-color: transparent;\n  top: -500px;\n  left: 340px; }\n\n/*\ndiv.ng-hide {\n  animation: 0.5s toevoegen;\n}\n\n@keyframes toevoegen {\n  from {\n      height: 100px;\n  } to {\n      height: 0;\n  }\n}\n*/\n"

/***/ },

/***/ 676:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 677:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 678:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 679:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 680:
/***/ function(module, exports) {

module.exports = "<!--\n<div ng-app=\"\" ng-init=\"mySwitch=false\">\n<button ng-disabled=\"mySwitch\" ng-click=\"mySwitch=true\">Click Me!</button>\n</div> \n-->\n<div id=\"album\" *ngIf=\"album\">\n  <header class=\"album-header\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div *ngIf=\"album.images.length > 0\">\n          <img class=\"album-thumb\" src=\"{{album.images[0].url}}\">\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <h4 *ngIf=\"album.artists.length > 0\">\n          <span *ngFor=\"let artist of album.artists\">{{artist.name}}</span>\n        </h4>\n        <h2>{{album.name}}</h2>\n        <h5>Release Date: {{album.release_date}}</h5>\n        <a class=\"btn btn-primary\" target=\"blank\" href=\"{{album.external_urls.spotify}}\">View in Spotify</a>\n      </div>\n    </div>\n  </header>\n  <div class=\"album-tracks\">\n    <h2>Album Tracks</h2>\n    <div *ngFor=\"let track of album.tracks.items\">\n      <div class=\"well\">\n        <h5>{{track.track_number}} - {{track.name}}</h5>\n        <a href=\"{{track.preview_url}}\" target=\"blank\">Preview Track</a><br><br>\n          <button (click)=\"add(album.artists[0].name, track.name, album.name)\" class=\"btn btn-success\"  >+ | Add to Favorites</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 681:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"artist\">\n  <header class=\"artist-header\">\n    <div *ngIf=\"artist.images.length > 0\">\n      <img class=\"artist-thumb img-circle\" src=\"{{artist.images[0].url}}\">\n    </div>\n    <h1>{{artist.name}}</h1>\n    <p *ngIf=\"artist.genres.length > 0\">\n      Genres: <span *ngFor=\"let genre of artist.genres\">{{genre}} </span>\n    </p>\n  </header>\n  <div class=\"artist-albums\">\n    <div class=\"row\">\n      <div *ngFor=\"let album of albums\">\n        <div class=\"col-md-3\">\n          <div class=\"well album\">\n            <div *ngIf=\"album.images.length > 0\">\n              <img class=\"album-thumb img-thumbnail\" src=\"{{album.images[0].url}}\">\n              <h4>{{album.name}}</h4>\n              <a class=\"btn btn-default btn-block\" routerLink=\"/album/{{album.id}}\">Album Details</a> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = "<div ng-app=\"ngAnimate\"> <!-- add/remove classes -->\n\n\n<a (click)=\"onCreate()\" class=\"btn btn-success\">+ | New song</a><br>\n<input type=\"checkbox\" ng-model=\"myCheck\"> Stop adding <br><br>\n<div *ngIf=\"warningMessage\">\n    <div class=\"alert alert-dismissible alert-warning\">\n        <h4>Warning!</h4>\n        <p>Are you sure you want to delete this song? {{selectedSong.artist}} - {{selectedSong.title}} </p>\n        <a (click)=\"delete(selectedSong)\" class=\"btn btn-small\">Yes</a>\n        <a (click)=\"disableDelete()\" class=\"btn btn-small\">No</a>\n    </div>\n</div>\n\n<div *ngIf=\"editErrorMessage\">\n    <div class=\"alert alert-dismissible alert-danger\">\n        <h4>Error</h4>\n        <p>Fill in all the fields</p>\n    </div>\n</div> \n<div class=\"span6\">\n    <div class=\"blokje\" ng-hide=\"myCheck\">\n    <div *ngIf=\"isCreateActive\">\n            <div id=\"addForm\">\n                <a  class=\"keyframes active\">\n                    <div *ngIf=\"errorMessage\">\n                        <div class=\"alert alert-dismissible alert-danger\">\n                            <h4>Error</h4>\n                            <p>Fill in all the fields</p>\n                        </div>\n                    </div> \n                    <form>\n                        <h4>Addding a new song</h4>\n                        <label for=\"artist\">artist:</label>\n                        <input type=\"text\" placeholder=\"artist\" class=\"form-control\" id=\"artist\" maxlength=\"40\" #artist/>\n                        <label for=\"title\">title:</label>\n                        <input type=\"text\" placeholder=\"title\" class=\"form-control\" id=\"title\" maxlength=\"40\" #title />    \n                        <label for=\"album\">album:</label>\n                        <input type=\"text\" placeholder=\"album\" class=\"form-control\" id=\"album\" maxlength=\"40\" #album/> \n                        <a id=\"addSaveButton\"  (click)=\"add(artist.value, title.value, album.value)\" ng-model=\"myCheck\" class=\"btn btn-success\">Save</a>\n                    </form>\n                </a>\n            </div>\n            \n        </div>\n        \n    </div>\n    <div *ngIf=\"isSaveActive\">\n        <h4>Edit <span>{{selectedSong.artist}} - {{selectedSong.title}}</span></h4>\n        <div class=\"form-group\">\n             <label for=\"artist\">artist:</label>\n             <input [(ngModel)]=\"selectedSong.artist\" placeholder=\"artist\" class=\"form-control\" id=\"artist\" maxlength=\"40\" #artist/>\n        </div>\n        <div class=\"form-group\">\n             <label for=\"title\">title:</label>\n             <input [(ngModel)]=\"selectedSong.title\" placeholder=\"title\" class=\"form-control\" id=\"title\" maxlength=\"40\" #title/>\n        </div>\n        <div class=\"form-group\">\n             <label for=\"album\">album:</label>\n             <input [(ngModel)]=\"selectedSong.album\" placeholder=\"album\" class=\"form-control\" id=\"album\" maxlength=\"40\" #album/>\n        </div>\n        <a (click)=\"save(artist.value, title.value, album.value)\" class=\"btn btn-success\">Save</a>\n    </div>\n    <table class=\"table table-striped table-condensed\">\n        <thead>\n        <tr>\n            <th style=\"width:10px;\">id</th>\n            <th style=\"min-width:50px;\">artist</th>\n            <th style=\"min-width:50px;\">title</th>\n            <th style=\"min-width:50px;\">album</th>\n            <th style=\"width:20px;\"> </th>\n            <th style=\"width:20px;\"> </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let song of songs\" [class.selected]=\"song === selectedSong\">\n            <td>{{ song.id }}</td>\n            <td>{{ song.artist }}</td>\n            <td>{{ song.title }}</td>\n            <td>{{ song.album }}</td>\n            <td><a  (click)=\"onSelect(song)\" class=\"btn btn-small btn-primary\" >edit</a></td>\n            <td><a  (click)=\"onDelete(song); $event.stopPropagation()\"  class=\"btn btn-small btn-danger\">delete</a></td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n</div>"

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"/\">Angular CLI Spotify</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/\">Home</a></li>\n            <li><a routerLink=\"/favorites\">Favorites</a></li>\n            <li><a routerLink=\"/loading\">Loading</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ },

/***/ 685:
/***/ function(module, exports) {

module.exports = "<div id=\"overlay\">\n  <div class=\"spinner\"></div>\n  <div class=\"smallSpinner\"></div>\n</div>"

/***/ },

/***/ 686:
/***/ function(module, exports) {

module.exports = "<h1>Angular CLI Spotify</h1>\n<p class=\"lead\">Use the Angular Spotify App to browse new releases, preview and add it to your favorites!</p>\n<form>\n  <div class=\"form-group\">\n    <input type=\"text\" name=\"searchStr\" [(ngModel)]=\"searchStr\" (keyup)=\"SearchMusic()\" class=\"form-control\"  placeholder=\"Search artist...\">\n  </div>\n</form>\n<div *ngIf=\"searchRes\">\n  <div *ngFor=\"let res of searchRes\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"search-res well\">\n          <h4><a routerLink=\"/artist/{{res.id}}\">{{res.name}}</a></h4>\n          <div>\n            <strong>Genres: </strong>\n            <span *ngFor=\"let genre of res.genres\">{{genre}} </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 711:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ }

},[711]);
//# sourceMappingURL=main.bundle.map