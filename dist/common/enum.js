"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_DIMENSIONS = exports.ENUM_DIMENSIONS = exports.ENUM_MODEL = exports.EVENT_EMITTER_ENUM = exports.ENUM_STATUS = void 0;
var ENUM_STATUS;
(function (ENUM_STATUS) {
    ENUM_STATUS["ACTIVE"] = "ACTIVE";
    ENUM_STATUS["INACTIVE"] = "INACTIVE";
    ENUM_STATUS["INIT"] = "INIT";
})(ENUM_STATUS = exports.ENUM_STATUS || (exports.ENUM_STATUS = {}));
var EVENT_EMITTER_ENUM;
(function (EVENT_EMITTER_ENUM) {
    EVENT_EMITTER_ENUM["UPDATE"] = ".update";
    EVENT_EMITTER_ENUM["DELETE"] = ".delete";
})(EVENT_EMITTER_ENUM = exports.EVENT_EMITTER_ENUM || (exports.EVENT_EMITTER_ENUM = {}));
var ENUM_MODEL;
(function (ENUM_MODEL) {
    ENUM_MODEL["AUTH"] = "AUTH";
    ENUM_MODEL["USER"] = "USER";
    ENUM_MODEL["ROLE"] = "ROLE";
    ENUM_MODEL["MENU"] = "MENU";
    ENUM_MODEL["AUTO_UPLOAD"] = "AUTO_UPLOAD";
    ENUM_MODEL["AUTO_MOVIE"] = "AUTO_MOVIE";
    ENUM_MODEL["CATEGORY"] = "CATEGORY";
    ENUM_MODEL["MOVIE"] = "MOVIE";
    ENUM_MODEL["MOVIE_STATUS"] = "MOVIE_STATUS";
    ENUM_MODEL["PERMISSION"] = "PERMISSION";
    ENUM_MODEL["EPISODE"] = "EPISODE";
    ENUM_MODEL["VIDEO"] = "VIDEO";
    ENUM_MODEL["IMAGE"] = "IMAGE";
    ENUM_MODEL["STATUS"] = "STATUS";
    ENUM_MODEL["VIEWS"] = "VIEWS";
    ENUM_MODEL["LIKES"] = "LIKES";
    ENUM_MODEL["SETTING"] = "SETTING";
    ENUM_MODEL["SPLIT_FILE"] = "SPLIT_FILE";
    ENUM_MODEL["FAVORITE"] = "FAVORITE";
    ENUM_MODEL["ERROR_MOVIE"] = "ERROR_MOVIE";
    ENUM_MODEL["COMMENT"] = "COMMENT";
    ENUM_MODEL["VALID_ADDRESS"] = "VALID_ADDRESS";
    ENUM_MODEL["CAPTCHA"] = "CAPTCHA";
    ENUM_MODEL["MOVIE_GROUP"] = "MOVIE_GROUP";
    ENUM_MODEL["PART_MOVIE"] = "PART_MOVIE";
    ENUM_MODEL["FANSUB"] = "FANSUB";
    ENUM_MODEL["VIDEO_LINK"] = "VIDEO_LINK";
    ENUM_MODEL["FOLDER"] = "FOLDER";
})(ENUM_MODEL = exports.ENUM_MODEL || (exports.ENUM_MODEL = {}));
exports.ENUM_DIMENSIONS = {
    '240p': {
        name: '240p',
        aspect_ratio: '4:3',
        pixel_size: '320x240',
        width: 320,
        height: 240,
        profile: 'main',
        hlsTime: '4',
        bv: '400k',
        maxrate: '400k',
        bufsize: '600k',
        ba: '96k',
    },
    '360p': {
        name: '360p',
        aspect_ratio: '4:3',
        pixel_size: '480x360',
        width: 480,
        height: 360,
        profile: 'main',
        hlsTime: '4',
        bv: '800k',
        maxrate: '856k',
        bufsize: '1200k',
        ba: '96k',
    },
    '480p': {
        name: '480p',
        aspect_ratio: '4:3',
        pixel_size: '640x480',
        width: 640,
        height: 480,
        profile: 'main',
        hlsTime: '4',
        bv: '1400k',
        maxrate: '1498k',
        bufsize: '2100k',
        ba: '128k',
    },
    '720p': {
        name: '720p',
        aspect_ratio: '16:9',
        pixel_size: '1280x720',
        width: 1280,
        height: 720,
        profile: 'main',
        hlsTime: '4',
        bv: '2800k',
        maxrate: '2996k',
        bufsize: '4200k',
        ba: '128k',
    },
    '1080p': {
        name: '1080p',
        aspect_ratio: '16:9',
        pixel_size: '1920x1080',
        width: 1920,
        height: 1080,
        profile: 'main',
        hlsTime: '4',
        bv: '5000k',
        maxrate: '5350k',
        bufsize: '7500k',
        ba: '192k',
    },
    '1440p': {
        name: '1440p',
        aspect_ratio: '16:9',
        pixel_size: '2560x1440',
        width: 2560,
        height: 1440,
        profile: 'main',
        hlsTime: '4',
        bv: '8000k',
        maxrate: '6850k',
        bufsize: '8500k',
        ba: '192k',
    },
    '2160p': {
        name: '2160p',
        aspect_ratio: '1:1.9',
        pixel_size: '3840x2160',
        width: 3840,
        height: 2160,
        profile: 'main',
        hlsTime: '4',
        bv: '10000k',
        maxrate: '7850k',
        bufsize: '9500k',
        ba: '240k',
    },
    '4320p': {
        name: '4320p',
        aspect_ratio: '19:9',
        pixel_size: '7680x4320',
        width: 7680,
        height: 4320,
        profile: 'main',
        hlsTime: '4',
        bv: '12000k',
        maxrate: '8850k',
        bufsize: '10500k',
        ba: '240k',
    },
};
exports.LIST_DIMENSIONS = [
    {
        name: '240p',
        aspect_ratio: '4:3',
        pixel_size: '320x240',
        width: 320,
        height: 240,
        profile: 'main',
        hlsTime: '4',
        bv: '400k',
        maxrate: '400k',
        bufsize: '600k',
        ba: '96k',
    },
    {
        name: '360p',
        aspect_ratio: '4:3',
        pixel_size: '480x360',
        width: 480,
        height: 360,
        profile: 'main',
        hlsTime: '4',
        bv: '800k',
        maxrate: '856k',
        bufsize: '1200k',
        ba: '96k',
    },
    {
        name: '480p',
        aspect_ratio: '4:3',
        pixel_size: '640x480',
        width: 640,
        height: 480,
        profile: 'main',
        hlsTime: '4',
        bv: '1400k',
        maxrate: '1498k',
        bufsize: '2100k',
        ba: '128k',
    },
    {
        name: '720p',
        aspect_ratio: '16:9',
        pixel_size: '1280x720',
        width: 1280,
        height: 720,
        profile: 'main',
        hlsTime: '4',
        bv: '2800k',
        maxrate: '2996k',
        bufsize: '4200k',
        ba: '128k',
    },
    {
        name: '1080p',
        aspect_ratio: '16:9',
        pixel_size: '1920x1080',
        width: 1920,
        height: 1080,
        profile: 'main',
        hlsTime: '4',
        bv: '5000k',
        maxrate: '5350k',
        bufsize: '7500k',
        ba: '192k',
    },
    {
        name: '1440p',
        aspect_ratio: '16:9',
        pixel_size: '2560x1440',
        width: 2560,
        height: 1440,
        profile: 'main',
        hlsTime: '4',
        bv: '8000k',
        maxrate: '6850k',
        bufsize: '8500k',
        ba: '192k',
    },
    {
        name: '2160p',
        aspect_ratio: '1:1.9',
        pixel_size: '3840x2160',
        width: 3840,
        height: 2160,
        profile: 'main',
        hlsTime: '4',
        bv: '10000k',
        maxrate: '7850k',
        bufsize: '9500k',
        ba: '240k',
    },
    {
        name: '4320p',
        aspect_ratio: '19:9',
        pixel_size: '7680x4320',
        width: 7680,
        height: 4320,
        profile: 'main',
        hlsTime: '4',
        bv: '12000k',
        maxrate: '8850k',
        bufsize: '10500k',
        ba: '240k',
    },
];
//# sourceMappingURL=enum.js.map