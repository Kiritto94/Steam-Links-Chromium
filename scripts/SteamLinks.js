"use strict";
const url = window.location.pathname
const steam_pre_url = "steam://openurl/";
const ToApp = steam_pre_url + location.href;
location.href = ToApp

