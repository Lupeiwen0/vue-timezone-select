import { computed as be, unref as sa, defineComponent as ge, toRef as Ba, resolveComponent as Oa, openBlock as ca, createElementBlock as qa, createVNode as pe, withCtx as ye, Fragment as ke, renderList as Ae, createBlock as Te } from "vue";
const we = 60 * 60 * 1e3, Ua = (a, e, n) => {
  const [i, t] = a.split("/"), [r, s] = t.split(":");
  return Date.UTC(n, i - 1, r, s) - e * we;
}, ve = (a, e, n, i, t) => {
  const r = new Date(a).getUTCFullYear(), s = Ua(e, t, r), o = Ua(n, i, r);
  return a >= s && a < o;
}, re = ve, Se = (a) => {
  let n = a.timezones[a.tz];
  if (n === void 0)
    return console.warn("Warning: couldn't find timezone " + a.tz), 0;
  if (n.dst === void 0)
    return n.offset;
  let i = n.offset, t = n.offset + 1;
  n.hem === "n" && (t = i - 1);
  let r = n.dst.split("->");
  return re(a.epoch, r[0], r[1], i, t) === !0 ? i : t;
}, Ce = Se, $a = {
  "9|s": "2/dili,2/jayapura",
  "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,11/palau,japan,rok",
  "9.5|s|04/03:03->10/02:02": "4/adelaide,4/broken_hill,4/south,4/yancowinna",
  "9.5|s": "4/darwin,4/north",
  "8|s|03/08:01->10/04:00": "12/casey",
  "8|s": "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west,singapore",
  "8|n": "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator,hongkong,prc,roc",
  "8.75|s": "4/eucla",
  "7|s": "12/davis,2/jakarta,9/christmas",
  "7|n": "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/ho_chi_minh,2/tomsk,2/vientiane,2/saigon",
  "6|s": "12/vostok",
  "6|n": "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu",
  "6.5|n": "2/yangon,9/cocos,2/rangoon",
  "5|s": "12/mawson,9/kerguelen",
  "5|n": "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad",
  "5.75|n": "2/katmandu,2/kathmandu",
  "5.5|n": "2/kolkata,2/colombo,2/calcutta",
  "4|s": "9/reunion",
  "4|n": "2/baku,2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,2/volgograd,9/mahe,9/mauritius",
  "4.5|n|03/22:00->09/21:24": "2/tehran,iran",
  "4.5|n": "2/kabul",
  "3|s": "12/syowa,9/antananarivo",
  "3|n|03/27:03->10/30:04": "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kiev,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia",
  "3|n|03/27:02->10/30:03": "8/chisinau,8/tiraspol",
  "3|n|03/27:00->10/29:24": "2/beirut",
  "3|n|03/27:00->10/28:01": "2/gaza,2/hebron",
  "3|n|03/25:02->10/30:02": "2/jerusalem,2/tel_aviv,israel",
  "3|n|03/25:00->10/27:24": "2/damascus",
  "3|n|02/25:00->10/28:01": "2/amman",
  "3|n": "0/addis_ababa,0/asmara,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/baghdad,2/bahrain,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,2/istanbul,turkey,w-su",
  "2|s|03/27:02->10/30:02": "12/troll",
  "2|s": "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane",
  "2|n|03/27:02->10/30:03": "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen,poland",
  "2|n": "0/blantyre,0/bujumbura,0/cairo,0/khartoum,0/kigali,0/tripoli,8/kaliningrad,egypt,libya",
  "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek",
  "1|n|03/27:03->05/08:02": "0/casablanca,0/el_aaiun",
  "1|n|03/27:01->10/30:02": "3/canary,3/faroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faeroe,eire,8/belfast,gb-eire,gb,portugal",
  "1|n": "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis",
  "14|n": "11/kiritimati",
  "13|s|04/04:04->09/26:03": "11/apia",
  "13|s|01/15:02->11/05:03": "11/tongatapu",
  "13|n": "11/enderbury,11/fakaofo",
  "12|s|04/03:03->09/25:02": "12/mcmurdo,11/auckland,12/south_pole,nz",
  "12|s|01/17:03->11/14:02": "11/fiji",
  "12|n": "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis,kwajalein",
  "12.75|s|04/03:03->04/03:02": "11/chatham,nz-chat",
  "11|s|04/03:03->10/02:02": "12/macquarie",
  "11|s": "11/bougainville",
  "11|n": "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/pohnpei,11/ponape",
  "11.5|n|04/03:03->10/02:02": "11/norfolk",
  "10|s|04/03:03->10/02:02": "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria",
  "10|s": "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland",
  "10|n": "2/ust-nera,2/vladivostok,2/yakutsk,11/guam,11/saipan,11/chuuk,11/truk,11/yap",
  "10.5|s|04/03:01->10/02:02": "4/lord_howe,4/lhi",
  "0|n|03/27:00->10/30:01": "1/scoresbysund,3/azores",
  "0|n": "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/greenwich,13/uct,13/universal,13/zulu,gmt-0,gmt+0,gmt0,greenwich,iceland,uct,universal,utc,zulu",
  "-9|n|03/13:02->11/06:02": "1/adak,1/atka,us/aleutian",
  "-9|n": "11/gambier",
  "-9.5|n": "11/marquesas",
  "-8|n|03/13:02->11/06:02": "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska",
  "-8|n": "11/pitcairn",
  "-7|n|03/13:02->11/06:02": "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific",
  "-7|n|03/08:02->11/01:01": "1/dawson,1/whitehorse,6/yukon",
  "-7|n": "1/creston,1/dawson_creek,1/fort_nelson,1/hermosillo,1/phoenix,us/arizona",
  "-6|s|04/02:22->09/03:22": "11/easter,7/easterisland",
  "-6|n|04/03:02->10/30:02": "1/chihuahua,1/mazatlan,10/bajasur",
  "-6|n|03/13:02->11/06:02": "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/ojinaga,1/yellowknife,1/shiprock,6/mountain,navajo,us/mountain",
  "-6|n": "1/belize,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan",
  "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre",
  "-5|n|04/03:02->10/30:02": "1/bahia_banderas,1/merida,1/mexico_city,1/monterrey,10/general",
  "-5|n|03/13:02->11/06:02": "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke",
  "-5|n|03/12:03->11/05:01": "1/north_dakota",
  "-5|n": "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan,jamaica",
  "-4|s|05/13:23->08/13:01": "12/palmer",
  "-4|s|04/02:24->09/04:00": "1/santiago,7/continental",
  "-4|s|03/26:24->10/02:00": "1/asuncion",
  "-4|s|02/16:24->11/03:00": "1/campo_grande,1/cuiaba",
  "-4|s": "1/la_paz,1/manaus,5/west",
  "-4|n|03/13:02->11/06:02": "1/detroit,1/grand_turk,1/indianapolis,1/iqaluit,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan",
  "-4|n|03/13:00->11/06:01": "1/havana,cuba",
  "-4|n|03/12:03->11/05:01": "1/indiana,1/kentucky",
  "-4|n": "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin",
  "-3|s": "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/comodrivadavia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/argentina/rosario,1/rosario,5/east",
  "-3|n|03/13:02->11/06:02": "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic",
  "-3|n": "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem",
  "-2|n|03/26:22->10/29:23": "1/nuuk,1/godthab",
  "-2|n|03/13:02->11/06:02": "1/miquelon",
  "-2|n": "1/noronha,3/south_georgia,5/denoronha",
  "-2.5|n|03/13:02->11/06:02": "1/st_johns,6/newfoundland",
  "-1|n": "3/cape_verde",
  "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa",
  "-10|n": "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii"
}, ze = [
  "africa",
  "america",
  "asia",
  "atlantic",
  "australia",
  "brazil",
  "canada",
  "chile",
  "europe",
  "indian",
  "mexico",
  "pacific",
  "antarctica",
  "etc"
];
let Z = {};
Object.keys($a).forEach((a) => {
  let e = a.split("|"), n = {
    offset: Number(e[0]),
    hem: e[1]
  };
  e[2] && (n.dst = e[2]), $a[a].split(",").forEach((t) => {
    t = t.replace(/(^[0-9]+)\//, (r, s) => (s = Number(s), ze[s] + "/")), Z[t] = n;
  });
});
Z.utc = {
  offset: 0,
  hem: "n"
};
for (let a = -14; a <= 14; a += 0.5) {
  let e = a;
  e > 0 && (e = "+" + e);
  let n = "etc/gmt" + e;
  Z[n] = {
    offset: a * -1,
    hem: "n"
  }, n = "utc/gmt" + e, Z[n] = {
    offset: a * -1,
    hem: "n"
  };
}
const se = Z, je = "utc", Ee = () => {
  if (typeof Intl > "u" || typeof Intl.DateTimeFormat > "u")
    return null;
  let a = Intl.DateTimeFormat();
  if (typeof a > "u" || typeof a.resolvedOptions > "u")
    return null;
  let e = a.resolvedOptions().timeZone;
  return e ? e.toLowerCase() : null;
}, Me = () => {
  let a = Ee();
  return a === null ? je : a;
}, _e = Me, Pe = /(\-?[0-9]+)h(rs)?/i, De = /(\-?[0-9]+)/, Ie = /utc([\-+]?[0-9]+)/i, Ne = /gmt([\-+]?[0-9]+)/i, na = function(a) {
  return a = Number(a), a >= -13 && a <= 13 ? (a = a * -1, a = (a > 0 ? "+" : "") + a, "etc/gmt" + a) : null;
}, Be = function(a) {
  let e = a.match(Pe);
  if (e !== null || (e = a.match(Ie), e !== null))
    return na(e[1]);
  if (e = a.match(Ne), e !== null) {
    let n = Number(e[1]) * -1;
    return na(n);
  }
  return e = a.match(De), e !== null ? na(e[1]) : null;
}, Oe = Be, qe = _e(), Ha = Object.keys(se).reduce((a, e) => {
  let n = e.split("/")[1] || "";
  return n = n.replace(/_/g, " "), a[n] = e, a;
}, {}), Ue = (a) => (a = a.replace(/ time/g, ""), a = a.replace(/ (standard|daylight|summer)/g, ""), a = a.replace(/\b(east|west|north|south)ern/g, "$1"), a = a.replace(/\b(africa|america|australia)n/g, "$1"), a = a.replace(/\beuropean/g, "europe"), a = a.replace(/\islands/g, "island"), a), $e = (a, e) => {
  if (!a)
    return qe;
  typeof a != "string" && console.error("Timezone must be a string - recieved: '", a, `'
`);
  let n = a.trim();
  if (n = n.toLowerCase(), e.hasOwnProperty(n) === !0 || (n = Ue(n), e.hasOwnProperty(n) === !0))
    return n;
  if (Ha.hasOwnProperty(n) === !0)
    return Ha[n];
  if (/[0-9]/.test(n) === !0) {
    let i = Oe(n);
    if (i)
      return i;
  }
  throw new Error("Spacetime: Cannot find timezone named: '" + a + "'. Please enter an IANA timezone id.");
}, oa = $e;
function ua(a) {
  return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
}
function oe(a) {
  return Object.prototype.toString.call(a) === "[object Date]" && !isNaN(a.valueOf());
}
function He(a) {
  return Object.prototype.toString.call(a) === "[object Array]";
}
function L(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Ge(a) {
  return Object.prototype.toString.call(a) === "[object Boolean]";
}
function l(a, e = 2) {
  let n = "0";
  return a = a + "", a.length >= e ? a : new Array(e - a.length + 1).join(n) + a;
}
function Ke(a) {
  return a ? a[0].toUpperCase() + a.substr(1) : "";
}
function C(a) {
  let e = a % 10, n = a % 100;
  return e === 1 && n !== 11 ? a + "st" : e === 2 && n !== 12 ? a + "nd" : e === 3 && n !== 13 ? a + "rd" : a + "th";
}
function F(a) {
  return a = String(a), a = a.replace(/([0-9])(st|nd|rd|th)$/i, "$1"), parseInt(a, 10);
}
function H(a = "") {
  return a = a.toLowerCase().trim(), a = a.replace(/ies$/, "y"), a = a.replace(/s$/, ""), a = a.replace(/-/g, ""), a === "day" || a === "days" ? "date" : a === "min" || a === "mins" ? "minute" : a;
}
function W(a) {
  return typeof a == "number" ? a : oe(a) ? a.getTime() : a.epoch ? a.epoch : null;
}
function B(a, e) {
  return L(a) === !1 ? e.clone().set(a) : a;
}
function Y(a, e = "") {
  const n = a > 0 ? "+" : "-", i = Math.abs(a), t = l(parseInt("" + i, 10)), r = l(i % 1 * 60);
  return `${n}${t}${e}${r}`;
}
const Ta = {
  year: new Date().getFullYear(),
  month: 0,
  date: 1
}, xe = (a, e, n) => {
  if (e.length === 0)
    return a;
  let i = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
  for (let t = 0; t < i.length; t++) {
    let r = e[t] || n[i[t]] || Ta[i[t]] || 0;
    a = a[i[t]](r);
  }
  return a;
}, Le = (a, e, n) => {
  if (Object.keys(e).length === 0)
    return a;
  e = Object.assign({}, Ta, n, e);
  let i = Object.keys(e);
  for (let t = 0; t < i.length; t++) {
    let r = i[t];
    if (a[r] === void 0 || typeof a[r] != "function" || e[r] === null || e[r] === void 0 || e[r] === "")
      continue;
    let s = e[r] || n[r] || Ta[r] || 0;
    a = a[r](s);
  }
  return a;
}, Fe = function(a, e) {
  return e > 0 && e < 25e8 && a.silent === !1 && (console.warn("  - Warning: You are setting the date to January 1970."), console.warn("       -   did input seconds instead of milliseconds?")), a.epoch = e, a;
}, We = {
  parseArray: xe,
  parseObject: Le,
  parseNumber: Fe
}, N = function(a) {
  return a.epoch = Date.now(), Object.keys(a._today || {}).forEach((e) => {
    typeof a[e] == "function" && (a = a[e](a._today[e]));
  }), a;
}, wa = {
  now: (a) => N(a),
  today: (a) => N(a),
  tonight: (a) => (a = N(a), a = a.hour(18), a),
  tomorrow: (a) => (a = N(a), a = a.add(1, "day"), a = a.startOf("day"), a),
  yesterday: (a) => (a = N(a), a = a.subtract(1, "day"), a = a.startOf("day"), a),
  christmas: (a) => {
    let e = N(a).year();
    return a = a.set([e, 11, 25, 18, 0, 0]), a;
  },
  "new years": (a) => {
    let e = N(a).year();
    return a = a.set([e, 11, 31, 18, 0, 0]), a;
  }
};
wa["new years eve"] = wa["new years"];
const Ga = wa, Re = function(a) {
  return a = a.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i, ""), a = a.replace(/([0-9])(th|rd|st|nd)/, "$1"), a = a.replace(/,/g, ""), a = a.replace(/ +/g, " ").trim(), a;
}, Ve = Re;
let y = {
  millisecond: 1
};
y.second = 1e3;
y.minute = 6e4;
y.hour = 36e5;
y.day = 864e5;
y.date = y.day;
y.month = 864e5 * 29.5;
y.week = 6048e5;
y.year = 3154e7;
Object.keys(y).forEach((a) => {
  y[a + "s"] = y[a];
});
const h = y, ia = (a, e, n, i, t) => {
  let r = a.d[n]();
  if (r === e)
    return;
  let s = t === null ? null : a.d[t](), o = a.epoch, m = e - r;
  a.epoch += h[i] * m, i === "day" && Math.abs(m) > 28 && e < 28 && (a.epoch += h.hour), t !== null && s !== a.d[t]() && (a.epoch = o);
  const d = h[i] / 2;
  for (; a.d[n]() < e; )
    a.epoch += d;
  for (; a.d[n]() > e; )
    a.epoch -= d;
  t !== null && s !== a.d[t]() && (a.epoch = o);
}, ha = {
  year: {
    valid: (a) => a > -4e3 && a < 4e3,
    walkTo: (a, e) => ia(a, e, "getFullYear", "year", null)
  },
  month: {
    valid: (a) => a >= 0 && a <= 11,
    walkTo: (a, e) => {
      let n = a.d, i = n.getMonth(), t = a.epoch, r = n.getFullYear();
      if (i === e)
        return;
      let s = e - i;
      for (a.epoch += h.day * (s * 28), r !== a.d.getFullYear() && (a.epoch = t); a.d.getMonth() < e; )
        a.epoch += h.day;
      for (; a.d.getMonth() > e; )
        a.epoch -= h.day;
    }
  },
  date: {
    valid: (a) => a > 0 && a <= 31,
    walkTo: (a, e) => ia(a, e, "getDate", "day", "getMonth")
  },
  hour: {
    valid: (a) => a >= 0 && a < 24,
    walkTo: (a, e) => ia(a, e, "getHours", "hour", "getDate")
  },
  minute: {
    valid: (a) => a >= 0 && a < 60,
    walkTo: (a, e) => ia(a, e, "getMinutes", "minute", "getHours")
  },
  second: {
    valid: (a) => a >= 0 && a < 60,
    walkTo: (a, e) => {
      a.epoch = a.seconds(e).epoch;
    }
  },
  millisecond: {
    valid: (a) => a >= 0 && a < 1e3,
    walkTo: (a, e) => {
      a.epoch = a.milliseconds(e).epoch;
    }
  }
}, Ye = (a, e) => {
  let n = Object.keys(ha), i = a.clone();
  for (let t = 0; t < n.length; t++) {
    let r = n[t], s = e[r];
    if (s === void 0 && (s = i[r]()), typeof s == "string" && (s = parseInt(s, 10)), !ha[r].valid(s)) {
      a.epoch = null, a.silent === !1 && console.warn("invalid " + r + ": " + s);
      return;
    }
    ha[r].walkTo(a, s);
  }
}, u = Ye, Je = [
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
], U = Je;
let Q = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
], X = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];
function Ze() {
  const a = {
    sep: 8
  };
  for (let e = 0; e < Q.length; e++)
    a[Q[e]] = e;
  for (let e = 0; e < X.length; e++)
    a[X[e]] = e;
  return a;
}
function R() {
  return Q;
}
function Qe() {
  return X;
}
function le() {
  return Ze();
}
function Xe(a) {
  Q = a.short || Q, X = a.long || X;
}
const an = (a, e) => {
  if (!e)
    return a;
  let n = 0;
  if (/^[\+-]?[0-9]{2}:[0-9]{2}$/.test(e) && (/:00/.test(e) === !0 && (e = e.replace(/:00/, "")), /:30/.test(e) === !0 && (e = e.replace(/:30/, ".5"))), /^[\+-]?[0-9]{4}$/.test(e) && (e = e.replace(/30$/, ".5")), n = parseFloat(e), Math.abs(n) > 100 && (n = n / 100), n === 0 || e === "Z" || e === "z")
    return a.tz = "etc/gmt", a;
  n *= -1, n >= 0 && (n = "+" + n);
  let i = "etc/gmt" + n;
  return a.timezones[i] && (a.tz = i), a;
}, en = an, nn = function(a = "") {
  return a = String(a), a.length > 3 ? a = a.substr(0, 3) : a.length === 1 ? a = a + "00" : a.length === 2 && (a = a + "0"), Number(a) || 0;
}, tn = (a, e = "") => {
  e = e.replace(/^\s+/, "").toLowerCase();
  let n = e.match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/);
  if (n !== null) {
    let i = Number(n[1]);
    if (i < 0 || i > 24)
      return a.startOf("day");
    let t = Number(n[2]);
    if (n[2].length < 2 || t < 0 || t > 59)
      return a.startOf("day");
    a = a.hour(i), a = a.minute(t), a = a.seconds(n[3] || 0), a = a.millisecond(nn(n[4]));
    let r = e.match(/[\b0-9] ?(am|pm)\b/);
    return r !== null && r[1] && (a = a.ampm(r[1])), a;
  }
  if (n = e.match(/([0-9]+) ?(am|pm)/), n !== null && n[1]) {
    let i = Number(n[1]);
    return i > 12 || i < 1 ? a.startOf("day") : (a = a.hour(n[1] || 0), a = a.ampm(n[2]), a = a.startOf("hour"), a);
  }
  return a = a.startOf("day"), a;
}, g = tn;
let Ka = le();
const p = (a) => {
  if (U.hasOwnProperty(a.month) !== !0)
    return !1;
  if (a.month === 1)
    return ua(a.year) && a.date <= 29 ? !0 : a.date <= 28;
  let e = U[a.month] || 0;
  return a.date <= e;
}, j = (a = "", e) => {
  if (a = a.trim(), /^'[0-9][0-9]$/.test(a) === !0) {
    let i = Number(a.replace(/'/, ""));
    return i > 50 ? 1900 + i : 2e3 + i;
  }
  let n = parseInt(a, 10);
  return !n && e && (n = e.year), n = n || new Date().getFullYear(), n;
}, _ = function(a) {
  return a = a.toLowerCase().trim(), a === "sept" ? Ka.sep : Ka[a];
}, rn = [
  {
    reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i,
    parse: (a, e) => {
      let n = {
        year: e[1],
        month: parseInt(e[2], 10) - 1,
        date: e[3]
      };
      return p(n) === !1 ? (a.epoch = null, a) : (en(a, e[5]), u(a, n), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
    parse: (a, e) => {
      let n = {
        year: e[1],
        month: parseInt(e[2], 10) - 1,
        date: parseInt(e[3], 10)
      };
      return n.month >= 12 && (n.date = parseInt(e[2], 10), n.month = parseInt(e[3], 10) - 1), p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
    parse: (a, e) => {
      let n = {
        year: j(e[1], a._today),
        month: _(e[2]),
        date: F(e[3] || "")
      };
      return p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[4]), a);
    }
  }
], sn = [
  {
    reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
    parse: (a, e) => {
      let n = parseInt(e[1], 10) - 1, i = parseInt(e[2], 10);
      (a.british || n >= 12) && (i = parseInt(e[1], 10), n = parseInt(e[2], 10) - 1);
      let t = {
        date: i,
        month: n,
        year: j(e[3], a._today) || new Date().getFullYear()
      };
      return p(t) === !1 ? (a.epoch = null, a) : (u(a, t), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
    parse: (a, e) => {
      let n = {
        year: j(e[3], a._today),
        month: _(e[1]),
        date: F(e[2] || "")
      };
      return p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i,
    parse: (a, e) => {
      let n = {
        year: j(e[3], a._today),
        month: _(e[1]),
        date: F(e[2] || "")
      };
      return p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i,
    parse: (a, e) => {
      let n = {
        year: j(e[5], a._today),
        month: _(e[1]),
        date: F(e[2] || "")
      };
      return p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[3]), a);
    }
  }
], on = [
  {
    reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i,
    parse: (a, e) => {
      let n = {
        year: j(e[3], a._today),
        month: _(e[2]),
        date: F(e[1] || "")
      };
      return p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
    parse: (a, e) => {
      let n = {
        year: j(e[3], a._today),
        month: _(e[2]),
        date: F(e[1])
      };
      return !n.month || p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
    parse: (a, e) => {
      let n = {
        date: Number(e[1]),
        month: _(e[2]),
        year: Number(e[3])
      };
      return p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = a.startOf("day"), a = g(a, e[4]), a);
    }
  }
], ln = [
  {
    reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i,
    parse: (a, e) => {
      let n = {
        year: e[1],
        month: parseInt(e[2], 10) - 1,
        date: 1
      };
      return p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^([a-z]+) ([0-9]{4})$/i,
    parse: (a, e) => {
      let n = {
        year: j(e[2], a._today),
        month: _(e[1]),
        date: a._today.date || 1
      };
      return p(n) === !1 ? (a.epoch = null, a) : (u(a, n), a = g(a, e[4]), a);
    }
  },
  {
    reg: /^(q[0-9])( of)?( [0-9]{4})?/i,
    parse: (a, e) => {
      let n = e[1] || "";
      a = a.quarter(n);
      let i = e[3] || "";
      return i && (i = i.trim(), a = a.year(i)), a;
    }
  },
  {
    reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i,
    parse: (a, e) => {
      let n = e[1] || "";
      a = a.season(n);
      let i = e[3] || "";
      return i && (i = i.trim(), a = a.year(i)), a;
    }
  },
  {
    reg: /^[0-9,]+ ?b\.?c\.?$/i,
    parse: (a, e) => {
      let n = e[0] || "";
      n = n.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
      let i = new Date(), t = {
        year: parseInt(n.trim(), 10),
        month: i.getMonth(),
        date: i.getDate()
      };
      return p(t) === !1 ? (a.epoch = null, a) : (u(a, t), a = g(a), a);
    }
  },
  {
    reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i,
    parse: (a, e) => {
      let n = e[0] || "";
      n = n.replace(/,/g, "");
      let i = new Date(), t = {
        year: parseInt(n.trim(), 10),
        month: i.getMonth(),
        date: i.getDate()
      };
      return p(t) === !1 ? (a.epoch = null, a) : (u(a, t), a = g(a), a);
    }
  },
  {
    reg: /^[0-9]{4}( ?a\.?d\.?)?$/i,
    parse: (a, e) => {
      let n = a._today;
      n.month && !n.date && (n.date = 1);
      let i = new Date(), t = {
        year: j(e[0], n),
        month: n.month || i.getMonth(),
        date: n.date || i.getDate()
      };
      return p(t) === !1 ? (a.epoch = null, a) : (u(a, t), a = g(a), a);
    }
  }
], fa = [].concat(rn, sn, on, ln), mn = function(a, e, n) {
  for (let i = 0; i < fa.length; i++) {
    let t = e.match(fa[i].reg);
    if (t) {
      let r = fa[i].parse(a, t, n);
      if (r !== null && r.isValid())
        return r;
    }
  }
  return a.silent === !1 && console.warn("Warning: couldn't parse date-string: '" + e + "'"), a.epoch = null, a;
}, un = mn, { parseArray: dn, parseObject: xa, parseNumber: cn } = We, La = {
  year: new Date().getFullYear(),
  month: 0,
  date: 1
}, hn = (a, e) => {
  let n = a._today || La;
  if (typeof e == "number")
    return cn(a, e);
  if (a.epoch = Date.now(), a._today && L(a._today) && Object.keys(a._today).length > 0) {
    let i = xa(a, n, La);
    i.isValid() && (a.epoch = i.epoch);
  }
  return e == null || e === "" ? a : oe(e) === !0 ? (a.epoch = e.getTime(), a) : He(e) === !0 ? (a = dn(a, e, n), a) : L(e) === !0 ? e.epoch ? (a.epoch = e.epoch, a.tz = e.tz, a) : (a = xa(a, e, n), a) : typeof e != "string" ? a : (e = Ve(e), Ga.hasOwnProperty(e) === !0 ? (a = Ga[e](a), a) : un(a, e));
}, me = hn;
let va = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Sa = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
function aa() {
  return va;
}
function la() {
  return Sa;
}
function fn(a) {
  va = a.short || va, Sa = a.long || Sa;
}
const Fa = {
  mo: 1,
  tu: 2,
  we: 3,
  th: 4,
  fr: 5,
  sa: 6,
  su: 7,
  tues: 2,
  weds: 3,
  wedn: 3,
  thur: 4,
  thurs: 4
};
let ue = !0;
function bn() {
  return ue;
}
function gn(a) {
  ue = a;
}
const pn = (a) => {
  let e = a.timezone().current.offset;
  return e ? Y(e, ":") : "Z";
}, Wa = pn, z = (a) => bn() ? Ke(a) : a, yn = (a) => a >= 0 ? l(a, 4) : (a = Math.abs(a), "-" + l(a, 4)), K = {
  day: (a) => z(a.dayName()),
  "day-short": (a) => z(aa()[a.day()]),
  "day-number": (a) => a.day(),
  "day-ordinal": (a) => C(a.day()),
  "day-pad": (a) => l(a.day()),
  date: (a) => a.date(),
  "date-ordinal": (a) => C(a.date()),
  "date-pad": (a) => l(a.date()),
  month: (a) => z(a.monthName()),
  "month-short": (a) => z(R()[a.month()]),
  "month-number": (a) => a.month(),
  "month-ordinal": (a) => C(a.month()),
  "month-pad": (a) => l(a.month()),
  "iso-month": (a) => l(a.month() + 1),
  year: (a) => {
    let e = a.year();
    return e > 0 ? e : (e = Math.abs(e), e + " BC");
  },
  "year-short": (a) => {
    let e = a.year();
    return e > 0 ? `'${String(a.year()).substr(2, 4)}` : (e = Math.abs(e), e + " BC");
  },
  "iso-year": (a) => {
    let e = a.year(), n = e < 0, i = l(Math.abs(e), 4);
    return n && (i = l(i, 6), i = "-" + i), i;
  },
  time: (a) => a.time(),
  "time-24": (a) => `${a.hour24()}:${l(a.minute())}`,
  hour: (a) => a.hour12(),
  "hour-pad": (a) => l(a.hour12()),
  "hour-24": (a) => a.hour24(),
  "hour-24-pad": (a) => l(a.hour24()),
  minute: (a) => a.minute(),
  "minute-pad": (a) => l(a.minute()),
  second: (a) => a.second(),
  "second-pad": (a) => l(a.second()),
  millisecond: (a) => a.millisecond(),
  "millisecond-pad": (a) => l(a.millisecond(), 3),
  ampm: (a) => a.ampm(),
  quarter: (a) => "Q" + a.quarter(),
  season: (a) => a.season(),
  era: (a) => a.era(),
  json: (a) => a.json(),
  timezone: (a) => a.timezone().name,
  offset: (a) => Wa(a),
  numeric: (a) => `${a.year()}/${l(a.month() + 1)}/${l(a.date())}`,
  "numeric-us": (a) => `${l(a.month() + 1)}/${l(a.date())}/${a.year()}`,
  "numeric-uk": (a) => `${l(a.date())}/${l(a.month() + 1)}/${a.year()}`,
  "mm/dd": (a) => `${l(a.month() + 1)}/${l(a.date())}`,
  iso: (a) => {
    let e = a.format("iso-year"), n = l(a.month() + 1), i = l(a.date()), t = l(a.h24()), r = l(a.minute()), s = l(a.second()), o = l(a.millisecond(), 3), m = Wa(a);
    return `${e}-${n}-${i}T${t}:${r}:${s}.${o}${m}`;
  },
  "iso-short": (a) => {
    let e = l(a.month() + 1), n = l(a.date());
    return `${yn(a.year())}-${e}-${n}`;
  },
  "iso-utc": (a) => new Date(a.epoch).toISOString(),
  nice: (a) => `${R()[a.month()]} ${C(a.date())}, ${a.time()}`,
  "nice-24": (a) => `${R()[a.month()]} ${C(a.date())}, ${a.hour24()}:${l(a.minute())}`,
  "nice-year": (a) => `${R()[a.month()]} ${C(a.date())}, ${a.year()}`,
  "nice-day": (a) => `${aa()[a.day()]} ${z(R()[a.month()])} ${C(a.date())}`,
  "nice-full": (a) => `${a.dayName()} ${z(a.monthName())} ${C(a.date())}, ${a.time()}`,
  "nice-full-24": (a) => `${a.dayName()} ${z(a.monthName())} ${C(a.date())}, ${a.hour24()}:${l(a.minute())}`
}, Ra = {
  "day-name": "day",
  "month-name": "month",
  "iso 8601": "iso",
  "time-h24": "time-24",
  "time-12": "time",
  "time-h12": "time",
  tz: "timezone",
  "day-num": "day-number",
  "month-num": "month-number",
  "month-iso": "iso-month",
  "year-iso": "iso-year",
  "nice-short": "nice",
  "nice-short-24": "nice-24",
  mdy: "numeric-us",
  dmy: "numeric-uk",
  ymd: "numeric",
  "yyyy/mm/dd": "numeric",
  "mm/dd/yyyy": "numeric-us",
  "dd/mm/yyyy": "numeric-us",
  "little-endian": "numeric-uk",
  "big-endian": "numeric",
  "day-nice": "nice-day"
};
Object.keys(Ra).forEach((a) => K[a] = K[Ra[a]]);
const kn = (a, e = "") => {
  if (a.isValid() !== !0)
    return "";
  if (K.hasOwnProperty(e)) {
    let n = K[e](a) || "";
    return e !== "json" && (n = String(n), e !== "ampm" && (n = z(n))), n;
  }
  if (e.indexOf("{") !== -1) {
    let n = /\{(.+?)\}/g;
    return e = e.replace(n, (i, t) => {
      if (t = t.toLowerCase().trim(), K.hasOwnProperty(t)) {
        let r = String(K[t](a));
        return t !== "ampm" ? z(r) : r;
      }
      return "";
    }), e;
  }
  return a.format("iso-short");
}, ba = kn, ma = {
  G: (a) => a.era(),
  GG: (a) => a.era(),
  GGG: (a) => a.era(),
  GGGG: (a) => a.era() === "AD" ? "Anno Domini" : "Before Christ",
  y: (a) => a.year(),
  yy: (a) => l(Number(String(a.year()).substr(2, 4))),
  yyy: (a) => a.year(),
  yyyy: (a) => a.year(),
  yyyyy: (a) => "0" + a.year(),
  Q: (a) => a.quarter(),
  QQ: (a) => a.quarter(),
  QQQ: (a) => a.quarter(),
  QQQQ: (a) => a.quarter(),
  M: (a) => a.month() + 1,
  MM: (a) => l(a.month() + 1),
  MMM: (a) => a.format("month-short"),
  MMMM: (a) => a.format("month"),
  w: (a) => a.week(),
  ww: (a) => l(a.week()),
  d: (a) => a.date(),
  dd: (a) => l(a.date()),
  D: (a) => a.dayOfYear(),
  DD: (a) => l(a.dayOfYear()),
  DDD: (a) => l(a.dayOfYear(), 3),
  E: (a) => a.format("day-short"),
  EE: (a) => a.format("day-short"),
  EEE: (a) => a.format("day-short"),
  EEEE: (a) => a.format("day"),
  EEEEE: (a) => a.format("day")[0],
  e: (a) => a.day(),
  ee: (a) => a.day(),
  eee: (a) => a.format("day-short"),
  eeee: (a) => a.format("day"),
  eeeee: (a) => a.format("day")[0],
  a: (a) => a.ampm().toUpperCase(),
  aa: (a) => a.ampm().toUpperCase(),
  aaa: (a) => a.ampm().toUpperCase(),
  aaaa: (a) => a.ampm().toUpperCase(),
  h: (a) => a.h12(),
  hh: (a) => l(a.h12()),
  H: (a) => a.hour(),
  HH: (a) => l(a.hour()),
  m: (a) => a.minute(),
  mm: (a) => l(a.minute()),
  s: (a) => a.second(),
  ss: (a) => l(a.second()),
  SSS: (a) => l(a.millisecond(), 3),
  A: (a) => a.epoch - a.startOf("day").epoch,
  z: (a) => a.timezone().name,
  zz: (a) => a.timezone().name,
  zzz: (a) => a.timezone().name,
  zzzz: (a) => a.timezone().name,
  Z: (a) => Y(a.timezone().current.offset),
  ZZ: (a) => Y(a.timezone().current.offset),
  ZZZ: (a) => Y(a.timezone().current.offset),
  ZZZZ: (a) => Y(a.timezone().current.offset, ":")
}, E = (a, e, n) => {
  let i = a, t = e;
  for (let r = 0; r < n; r += 1)
    ma[i] = ma[t], i += a, t += e;
};
E("q", "Q", 4);
E("L", "M", 4);
E("Y", "y", 4);
E("c", "e", 4);
E("k", "H", 2);
E("K", "h", 2);
E("S", "s", 2);
E("v", "z", 4);
E("V", "Z", 4);
const An = function(a) {
  for (let e = 0; e < a.length; e += 1)
    if (a[e] === "'")
      for (let n = e + 1; n < a.length; n += 1) {
        if (a[n] && (a[e] += a[n]), a[n] === "'") {
          a[n] = null;
          break;
        }
        a[n] = null;
      }
  return a.filter((e) => e);
}, Tn = function(a) {
  for (let e = 0; e < a.length; e += 1) {
    let n = a[e];
    for (let i = e + 1; i < a.length && a[i] === n; i += 1)
      a[e] += a[i], a[i] = null;
  }
  return a = a.filter((e) => e), a = a.map((e) => (e === "''" && (e = "'"), e)), a;
}, wn = (a, e) => {
  let n = e.split("");
  return n = An(n), n = Tn(n), n.reduce((i, t) => (ma[t] !== void 0 ? i += ma[t](a) || "" : (/^'.{1,}'$/.test(t) && (t = t.replace(/'/g, "")), i += t), i), "");
}, vn = wn, Sn = ["year", "season", "quarter", "month", "week", "day", "quarterHour", "hour", "minute"], Va = function(a, e) {
  let n = a.clone().startOf(e), t = a.clone().endOf(e).epoch - n.epoch, r = (a.epoch - n.epoch) / t;
  return parseFloat(r.toFixed(2));
}, Cn = (a, e) => {
  if (e)
    return e = H(e), Va(a, e);
  let n = {};
  return Sn.forEach((i) => {
    n[i] = Va(a, i);
  }), n;
}, zn = Cn, jn = (a, e) => {
  let n = a.progress();
  return e = H(e), e === "quarterhour" && (e = "quarterHour"), n[e] !== void 0 ? (n[e] > 0.5 && (a = a.add(1, e)), a = a.startOf(e)) : a.silent === !1 && console.warn("no known unit '" + e + "'"), a;
}, En = jn, Ya = (a, e, n) => {
  let i = 0;
  for (a = a.clone(); a.isBefore(e); )
    a = a.add(1, n), i += 1;
  return a.isAfter(e, n) && (i -= 1), i;
}, Mn = (a, e, n) => a.isBefore(e) ? Ya(a, e, n) : Ya(e, a, n) * -1, ga = Mn, _n = (a, e) => {
  let n = e.year() - a.year();
  return a = a.year(e.year()), a.isAfter(e) && (n -= 1), n;
}, Pn = function(a, e) {
  let n = e.epoch - a.epoch, i = {
    milliseconds: n,
    seconds: parseInt(n / 1e3, 10)
  };
  i.minutes = parseInt(i.seconds / 60, 10), i.hours = parseInt(i.minutes / 60, 10);
  let t = a.clone();
  return i.years = _n(t, e), t = a.add(i.years, "year"), i.months = i.years * 12, t = a.add(i.months, "month"), i.months += ga(t, e, "month"), i.weeks = i.years * 52, t = a.add(i.weeks, "week"), i.weeks += ga(t, e, "week"), i.days = i.weeks * 7, t = a.add(i.days, "day"), i.days += ga(t, e, "day"), i;
}, Dn = Pn, In = function(a) {
  return Object.keys(a).forEach((e) => {
    a[e] *= -1;
  }), a;
}, Nn = function(a, e, n) {
  e = B(e, a);
  let i = !1;
  if (a.isAfter(e)) {
    let r = a;
    a = e, e = r, i = !0;
  }
  let t = Dn(a, e);
  return i && (t = In(t)), n ? (n = H(n), /s$/.test(n) !== !0 && (n += "s"), n === "dates" && (n = "days"), t[n]) : t;
}, Bn = Nn, G = (a) => Math.abs(a) || 0, On = function(a) {
  let e = "P";
  return e += G(a.years) + "Y", e += G(a.months) + "M", e += G(a.days) + "DT", e += G(a.hours) + "H", e += G(a.minutes) + "M", e += G(a.seconds) + "S", e;
}, qn = On;
function Un(a, e) {
  const n = a.isBefore(e), i = n ? e : a;
  let t = n ? a : e;
  t = t.clone();
  const r = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  return Object.keys(r).forEach((s) => {
    if (t.isSame(i, s))
      return;
    let o = t.diff(i, s);
    t = t.add(o, s), r[s] = o;
  }), n && Object.keys(r).forEach((s) => {
    r[s] !== 0 && (r[s] *= -1);
  }), r;
}
const Ja = {
  months: {
    almost: 10,
    over: 4
  },
  days: {
    almost: 25,
    over: 10
  },
  hours: {
    almost: 20,
    over: 8
  },
  minutes: {
    almost: 50,
    over: 20
  },
  seconds: {
    almost: 50,
    over: 20
  }
};
function Za(a, e) {
  return a === 1 && (e = e.slice(0, -1)), a + " " + e;
}
const $n = function(a) {
  let e = null, n = null, i = [], t = [];
  return Object.keys(a).forEach((r, s, o) => {
    const m = Math.abs(a[r]);
    if (m === 0)
      return;
    i.push(m + r[0]);
    const d = Za(m, r);
    if (t.push(d), !e) {
      if (e = n = d, s > 4)
        return;
      const b = o[s + 1], A = Math.abs(a[b]);
      A > Ja[b].almost ? (e = Za(m + 1, r), n = "almost " + e) : A > Ja[b].over && (n = "over " + d);
    }
  }), { qualified: n, rounded: e, abbreviated: i, englishValues: t };
}, Hn = $n, Gn = (a, e) => {
  e = B(e, a);
  const n = Un(a, e);
  if (Object.keys(n).every((A) => !n[A]) === !0)
    return {
      diff: n,
      rounded: "now",
      qualified: "now",
      precise: "now",
      abbreviated: [],
      iso: "P0Y0M0DT0H0M0S",
      direction: "present"
    };
  let t, r = "future", { rounded: s, qualified: o, englishValues: m, abbreviated: d } = Hn(n);
  t = m.splice(0, 2).join(", "), a.isAfter(e) === !0 ? (s += " ago", o += " ago", t += " ago", r = "past") : (s = "in " + s, o = "in " + o, t = "in " + t);
  let b = qn(n);
  return {
    diff: n,
    rounded: s,
    qualified: o,
    precise: t,
    abbreviated: d,
    iso: b,
    direction: r
  };
}, Kn = Gn, xn = [
  ["spring", 2, 1],
  ["summer", 5, 1],
  ["fall", 8, 1],
  ["autumn", 8, 1],
  ["winter", 11, 1]
], Ln = [
  ["fall", 2, 1],
  ["autumn", 2, 1],
  ["winter", 5, 1],
  ["spring", 8, 1],
  ["summer", 11, 1]
], v = { north: xn, south: Ln }, O = [
  null,
  [0, 1],
  [3, 1],
  [6, 1],
  [9, 1]
], q = {
  minute: (a) => (u(a, {
    second: 0,
    millisecond: 0
  }), a),
  quarterhour: (a) => {
    let e = a.minutes();
    return e >= 45 ? a = a.minutes(45) : e >= 30 ? a = a.minutes(30) : e >= 15 ? a = a.minutes(15) : a = a.minutes(0), u(a, {
      second: 0,
      millisecond: 0
    }), a;
  },
  hour: (a) => (u(a, {
    minute: 0,
    second: 0,
    millisecond: 0
  }), a),
  day: (a) => (u(a, {
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), a),
  week: (a) => {
    let e = a.clone();
    return a = a.day(a._weekStart), a.isAfter(e) && (a = a.subtract(1, "week")), u(a, {
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    }), a;
  },
  month: (a) => (u(a, {
    date: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), a),
  quarter: (a) => {
    let e = a.quarter();
    return O[e] && u(a, {
      month: O[e][0],
      date: O[e][1],
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    }), a;
  },
  season: (a) => {
    let e = a.season(), n = "north";
    a.hemisphere() === "South" && (n = "south");
    for (let i = 0; i < v[n].length; i++)
      if (v[n][i][0] === e) {
        let t = a.year();
        return e === "winter" && a.month() < 3 && (t -= 1), u(a, {
          year: t,
          month: v[n][i][1],
          date: v[n][i][2],
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        }), a;
      }
    return a;
  },
  year: (a) => (u(a, {
    month: 0,
    date: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }), a),
  decade: (a) => {
    a = a.startOf("year");
    let e = a.year(), n = parseInt(e / 10, 10) * 10;
    return a = a.year(n), a;
  },
  century: (a) => {
    a = a.startOf("year");
    let e = a.year(), n = parseInt(e / 100, 10) * 100;
    return a = a.year(n), a;
  }
};
q.date = q.day;
const Fn = (a, e) => {
  let n = a.clone();
  return e = H(e), q[e] ? q[e](n) : e === "summer" || e === "winter" ? (n = n.season(e), q.season(n)) : n;
}, Wn = (a, e) => {
  let n = a.clone();
  return e = H(e), q[e] && (n = q[e](n), n = n.add(1, e), n = n.subtract(1, "millisecond")), n;
}, Rn = function(a) {
  return !!(aa().find((e) => e === a) || la().find((e) => e === a));
}, Vn = function(a, e, n) {
  if (!e || !n)
    return [];
  if (e = H(e), n = a.clone().set(n), a.isAfter(n)) {
    let r = a;
    a = n, n = r;
  }
  let i = a.clone();
  Rn(e) ? (i = i.next(e), e = "week") : i.startOf(e).isBefore(a) && (i = i.next(e));
  let t = [];
  for (; i.isBefore(n); )
    t.push(i), i = i.add(1, e);
  return t;
}, Yn = Vn, Jn = (a) => a ? a.split("->") : [], Zn = (a) => (a = a[0].toUpperCase() + a.substr(1), a = a.replace(/\/gmt/, "/GMT"), a = a.replace(/[\/_]([a-z])/gi, (e) => e.toUpperCase()), a), Qn = (a) => {
  let e = a.timezones, n = a.tz;
  if (e.hasOwnProperty(n) === !1 && (n = oa(a.tz, e)), n === null)
    return a.silent === !1 && console.warn("Warn: could not find given or local timezone - '" + a.tz + "'"), {
      current: {
        epochShift: 0
      }
    };
  let i = e[n], t = {
    name: Zn(n),
    hasDst: Boolean(i.dst),
    default_offset: i.offset,
    hemisphere: i.hem === "s" ? "South" : "North",
    current: {}
  };
  if (t.hasDst) {
    let o = Jn(i.dst);
    t.change = {
      start: o[0],
      back: o[1]
    };
  }
  let r = i.offset, s = r;
  return t.hasDst === !0 && (t.hemisphere === "North" ? s = r - 1 : s = i.offset + 1), t.hasDst === !1 ? (t.current.offset = r, t.current.isDST = !1) : re(a.epoch, t.change.start, t.change.back, r, s) === !0 ? (t.current.offset = r, t.current.isDST = t.hemisphere === "North") : (t.current.offset = s, t.current.isDST = t.hemisphere === "South"), t;
}, V = Qn, Xn = [
  "century",
  "decade",
  "year",
  "month",
  "date",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
], $ = {
  set: function(a, e) {
    let n = this.clone();
    return n = me(n, a), e && (this.tz = oa(e)), n;
  },
  timezone: function() {
    return V(this);
  },
  isDST: function() {
    return V(this).current.isDST;
  },
  hasDST: function() {
    return V(this).hasDst;
  },
  offset: function() {
    return V(this).current.offset * 60;
  },
  hemisphere: function() {
    return V(this).hemisphere;
  },
  format: function(a) {
    return ba(this, a);
  },
  unixFmt: function(a) {
    return vn(this, a);
  },
  startOf: function(a) {
    return Fn(this, a);
  },
  endOf: function(a) {
    return Wn(this, a);
  },
  leapYear: function() {
    let a = this.year();
    return ua(a);
  },
  progress: function(a) {
    return zn(this, a);
  },
  nearest: function(a) {
    return En(this, a);
  },
  diff: function(a, e) {
    return Bn(this, a, e);
  },
  since: function(a) {
    return a || (a = this.clone().set()), Kn(this, a);
  },
  next: function(a) {
    return this.add(1, a).startOf(a);
  },
  last: function(a) {
    return this.subtract(1, a).startOf(a);
  },
  isValid: function() {
    return !this.epoch && this.epoch !== 0 ? !1 : !isNaN(this.d.getTime());
  },
  goto: function(a) {
    let e = this.clone();
    return e.tz = oa(a, e.timezones), e;
  },
  every: function(a, e) {
    if (typeof a == "object" && typeof e == "string") {
      let n = e;
      e = a, a = n;
    }
    return Yn(this, a, e);
  },
  isAwake: function() {
    let a = this.hour();
    return !(a < 8 || a > 22);
  },
  isAsleep: function() {
    return !this.isAwake();
  },
  daysInMonth: function() {
    switch (this.month()) {
      case 0:
        return 31;
      case 1:
        return this.leapYear() ? 29 : 28;
      case 2:
        return 31;
      case 3:
        return 30;
      case 4:
        return 31;
      case 5:
        return 30;
      case 6:
        return 31;
      case 7:
        return 31;
      case 8:
        return 30;
      case 9:
        return 31;
      case 10:
        return 30;
      case 11:
        return 31;
      default:
        throw new Error("Invalid Month state.");
    }
  },
  log: function() {
    return console.log(""), console.log(ba(this, "nice-short")), this;
  },
  logYear: function() {
    return console.log(""), console.log(ba(this, "full-short")), this;
  },
  json: function() {
    return Xn.reduce((a, e) => (a[e] = this[e](), a), {});
  },
  debug: function() {
    let a = this.timezone(), e = this.format("MM") + " " + this.format("date-ordinal") + " " + this.year();
    return e += `
     - ` + this.format("time"), console.log(`

`, e + `
     - ` + a.name + " (" + a.current.offset + ")"), this;
  },
  from: function(a) {
    return a = this.clone().set(a), a.since(this);
  },
  fromNow: function() {
    return this.clone().set(Date.now()).since(this);
  },
  weekStart: function(a) {
    if (typeof a == "number")
      return this._weekStart = a, this;
    if (typeof a == "string") {
      a = a.toLowerCase().trim();
      let e = aa().indexOf(a);
      e === -1 && (e = la().indexOf(a)), e === -1 && (e = 1), this._weekStart = e;
    } else
      console.warn("Spacetime Error: Cannot understand .weekStart() input:", a);
    return this;
  }
};
$.inDST = $.isDST;
$.round = $.nearest;
$.each = $.every;
const Qa = $, M = (a) => (typeof a == "string" && (a = parseInt(a, 10)), a), pa = ["year", "month", "date", "hour", "minute", "second", "millisecond"], Pa = (a, e, n) => {
  let i = pa.indexOf(n), t = pa.slice(i, pa.length);
  for (let r = 0; r < t.length; r++) {
    let s = e[t[r]]();
    a[t[r]](s);
  }
  return a;
}, D = function(a, e, n, i) {
  return n === !0 && a.isBefore(e) ? a = a.add(1, i) : n === !1 && a.isAfter(e) && (a = a.minus(1, i)), a;
}, ai = function(a, e) {
  e = M(e);
  let i = a.millisecond() - e;
  return a.epoch - i;
}, ei = function(a, e, n) {
  e = M(e);
  let i = a.clone(), r = (a.second() - e) * h.second;
  return a.epoch = a.epoch - r, a = D(a, i, n, "minute"), a.epoch;
}, Xa = function(a, e, n) {
  e = M(e);
  let i = a.clone(), r = (a.minute() - e) * h.minute;
  return a.epoch -= r, Pa(a, i, "second"), a = D(a, i, n, "hour"), a.epoch;
}, ya = function(a, e, n) {
  e = M(e), e >= 24 ? e = 24 : e < 0 && (e = 0);
  let i = a.clone(), t = a.hour() - e, r = t * h.hour;
  return a.epoch -= r, a.date() !== i.date() && (a = i.clone(), t > 1 && (t -= 1), t < 1 && (t += 1), r = t * h.hour, a.epoch -= r), u(a, {
    hour: e
  }), Pa(a, i, "minute"), a = D(a, i, n, "day"), a.epoch;
}, ni = function(a, e, n) {
  let i = e.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);
  if (!i) {
    if (i = e.match(/([0-9]{1,2}) ?(am|pm)/), !i)
      return a.epoch;
    i.splice(2, 0, "0"), i.splice(3, 0, "");
  }
  let t = !1, r = parseInt(i[1], 10), s = parseInt(i[2], 10);
  s >= 60 && (s = 59), r > 12 && (t = !0), t === !1 && (i[4] === "am" && r === 12 && (r = 0), i[4] === "pm" && r < 12 && (r += 12)), i[3] = i[3] || "", i[3] = i[3].replace(/:/, "");
  let o = parseInt(i[3], 10) || 0, m = a.clone();
  return a = a.hour(r), a = a.minute(s), a = a.second(o), a = a.millisecond(0), a = D(a, m, n, "day"), a.epoch;
}, ii = function(a, e, n) {
  if (e = M(e), e > 28) {
    let t = a.month(), r = U[t];
    t === 1 && e === 29 && ua(a.year()) && (r = 29), e > r && (e = r);
  }
  e <= 0 && (e = 1);
  let i = a.clone();
  return u(a, {
    date: e
  }), a = D(a, i, n, "month"), a.epoch;
}, ti = function(a, e, n) {
  typeof e == "string" && (e === "sept" && (e = "sep"), e = le()[e.toLowerCase()]), e = M(e), e >= 12 && (e = 11), e <= 0 && (e = 0);
  let i = a.date();
  i > U[e] && (i = U[e]);
  let t = a.clone();
  return u(a, {
    month: e,
    d: i
  }), a = D(a, t, n, "year"), a.epoch;
}, ka = function(a, e) {
  return typeof e == "string" && /^'[0-9]{2}$/.test(e) && (e = e.replace(/'/, "").trim(), e = Number(e), e > 30 ? e = 1900 + e : e = 2e3 + e), e = M(e), u(a, {
    year: e
  }), a.epoch;
}, ri = function(a, e, n) {
  let i = a.clone();
  return e = M(e), a = a.month(0), a = a.date(1), a = a.day("monday"), a.monthName() === "december" && a.date() >= 28 && (a = a.add(1, "week")), e -= 1, a = a.add(e, "weeks"), a = D(a, i, n, "year"), a.epoch;
}, si = function(a, e, n) {
  e = M(e);
  let i = a.clone();
  return e -= 1, e <= 0 ? e = 0 : e >= 365 && (e = 364), a = a.startOf("year"), a = a.add(e, "day"), Pa(a, i, "hour"), a = D(a, i, n, "year"), a.epoch;
};
let Ca = "am", za = "pm";
function oi() {
  return Ca;
}
function li() {
  return za;
}
function mi(a) {
  Ca = a.am || Ca, za = a.pm || za;
}
const ui = {
  millisecond: function(a) {
    if (a !== void 0) {
      let e = this.clone();
      return e.epoch = ai(e, a), e;
    }
    return this.d.getMilliseconds();
  },
  second: function(a, e) {
    if (a !== void 0) {
      let n = this.clone();
      return n.epoch = ei(n, a, e), n;
    }
    return this.d.getSeconds();
  },
  minute: function(a, e) {
    if (a !== void 0) {
      let n = this.clone();
      return n.epoch = Xa(n, a, e), n;
    }
    return this.d.getMinutes();
  },
  hour: function(a, e) {
    let n = this.d;
    if (a !== void 0) {
      let i = this.clone();
      return i.epoch = ya(i, a, e), i;
    }
    return n.getHours();
  },
  hourFloat: function(a, e) {
    if (a !== void 0) {
      let r = this.clone(), s = a % 1;
      s = s * 60;
      let o = parseInt(a, 10);
      return r.epoch = ya(r, o, e), r.epoch = Xa(r, s, e), r;
    }
    let n = this.d, i = n.getHours(), t = n.getMinutes();
    return t = t / 60, i + t;
  },
  hour12: function(a, e) {
    let n = this.d;
    if (a !== void 0) {
      let t = this.clone();
      a = "" + a;
      let r = a.match(/^([0-9]+)(am|pm)$/);
      if (r) {
        let s = parseInt(r[1], 10);
        r[2] === "pm" && (s += 12), t.epoch = ya(t, s, e);
      }
      return t;
    }
    let i = n.getHours();
    return i > 12 && (i = i - 12), i === 0 && (i = 12), i;
  },
  time: function(a, e) {
    if (a !== void 0) {
      let n = this.clone();
      return a = a.toLowerCase().trim(), n.epoch = ni(n, a, e), n;
    }
    return `${this.h12()}:${l(this.minute())}${this.ampm()}`;
  },
  ampm: function(a, e) {
    let n = oi(), i = this.hour();
    if (i >= 12 && (n = li()), typeof a != "string")
      return n;
    let t = this.clone();
    return a = a.toLowerCase().trim(), i >= 12 && a === "am" ? (i -= 12, t.hour(i, e)) : i < 12 && a === "pm" ? (i += 12, t.hour(i, e)) : t;
  },
  dayTime: function(a, e) {
    if (a !== void 0) {
      const i = {
        morning: "7:00am",
        breakfast: "7:00am",
        noon: "12:00am",
        lunch: "12:00pm",
        afternoon: "2:00pm",
        evening: "6:00pm",
        dinner: "6:00pm",
        night: "11:00pm",
        midnight: "23:59pm"
      };
      let t = this.clone();
      return a = a || "", a = a.toLowerCase(), i.hasOwnProperty(a) === !0 && (t = t.time(i[a], e)), t;
    }
    let n = this.hour();
    return n < 6 ? "night" : n < 12 ? "morning" : n < 17 ? "afternoon" : n < 22 ? "evening" : "night";
  },
  iso: function(a) {
    return a !== void 0 ? this.set(a) : this.format("iso");
  }
}, di = ui, ci = {
  date: function(a, e) {
    if (a !== void 0) {
      let n = this.clone();
      return a = parseInt(a, 10), a && (n.epoch = ii(n, a, e)), n;
    }
    return this.d.getDate();
  },
  day: function(a, e) {
    if (a === void 0)
      return this.d.getDay();
    let n = this.clone(), i = a;
    typeof a == "string" && (a = a.toLowerCase(), Fa.hasOwnProperty(a) ? i = Fa[a] : (i = aa().indexOf(a), i === -1 && (i = la().indexOf(a))));
    let r = this.d.getDay() - i;
    e === !0 && r > 0 && (r = r - 7), e === !1 && r < 0 && (r = r + 7);
    let s = this.subtract(r, "days");
    return u(s, {
      hour: n.hour(),
      minute: n.minute(),
      second: n.second()
    }), s;
  },
  dayName: function(a, e) {
    if (a === void 0)
      return la()[this.day()];
    let n = this.clone();
    return n = n.day(a, e), n;
  }
}, hi = ci, ae = (a) => (a = a.minute(0), a = a.second(0), a = a.millisecond(1), a), fi = {
  dayOfYear: function(a, e) {
    if (a !== void 0) {
      let r = this.clone();
      return r.epoch = si(r, a, e), r;
    }
    let n = 0, i = this.d.getMonth(), t;
    for (let r = 1; r <= i; r++)
      t = new Date(), t.setDate(1), t.setFullYear(this.d.getFullYear()), t.setHours(1), t.setMinutes(1), t.setMonth(r), t.setHours(-2), n += t.getDate();
    return n + this.d.getDate();
  },
  week: function(a, e) {
    if (a !== void 0) {
      let o = this.clone();
      return o.epoch = ri(this, a, e), o = ae(o), o;
    }
    let n = this.clone();
    n = n.month(0), n = n.date(1), n = ae(n), n = n.day("monday"), n.monthName() === "december" && n.date() >= 28 && (n = n.add(1, "week"));
    let i = 1;
    n.date() === 1 && (i = 0), n = n.minus(1, "second");
    const t = this.epoch;
    if (n.epoch > t)
      return 1;
    let r = 0, s = this.month() * 4;
    for (n.epoch += h.week * s, r += s; r <= 52; r++) {
      if (n.epoch > t)
        return r + i;
      n = n.add(1, "week");
    }
    return 52;
  },
  month: function(a, e) {
    if (a !== void 0) {
      let n = this.clone();
      return n.epoch = ti(n, a, e), n;
    }
    return this.d.getMonth();
  },
  monthName: function(a, e) {
    if (a !== void 0) {
      let n = this.clone();
      return n = n.month(a, e), n;
    }
    return Qe()[this.month()];
  },
  quarter: function(a, e) {
    if (a !== void 0 && (typeof a == "string" && (a = a.replace(/^q/i, ""), a = parseInt(a, 10)), O[a])) {
      let i = this.clone(), t = O[a][0];
      return i = i.month(t, e), i = i.date(1, e), i = i.startOf("day"), i;
    }
    let n = this.d.getMonth();
    for (let i = 1; i < O.length; i++)
      if (n < O[i][0])
        return i - 1;
    return 4;
  },
  season: function(a, e) {
    let n = "north";
    if (this.hemisphere() === "South" && (n = "south"), a !== void 0) {
      let t = this.clone();
      for (let r = 0; r < v[n].length; r++)
        a === v[n][r][0] && (t = t.month(v[n][r][1], e), t = t.date(1), t = t.startOf("day"));
      return t;
    }
    let i = this.d.getMonth();
    for (let t = 0; t < v[n].length - 1; t++)
      if (i >= v[n][t][1] && i < v[n][t + 1][1])
        return v[n][t][0];
    return "winter";
  },
  year: function(a) {
    if (a !== void 0) {
      let e = this.clone();
      return e.epoch = ka(e, a), e;
    }
    return this.d.getFullYear();
  },
  era: function(a) {
    if (a !== void 0) {
      let e = this.clone();
      a = a.toLowerCase();
      let n = e.d.getFullYear();
      return a === "bc" && n > 0 && (e.epoch = ka(e, n * -1)), a === "ad" && n < 0 && (e.epoch = ka(e, n * -1)), e;
    }
    return this.d.getFullYear() < 0 ? "BC" : "AD";
  },
  decade: function(a) {
    if (a !== void 0) {
      if (a = String(a), a = a.replace(/([0-9])'?s$/, "$1"), a = a.replace(/([0-9])(th|rd|st|nd)/, "$1"), !a)
        return console.warn("Spacetime: Invalid decade input"), this;
      a.length === 2 && /[0-9][0-9]/.test(a) && (a = "19" + a);
      let e = Number(a);
      return isNaN(e) ? this : (e = Math.floor(e / 10) * 10, this.year(e));
    }
    return this.startOf("decade").year();
  },
  century: function(a) {
    if (a !== void 0) {
      typeof a == "string" && (a = a.replace(/([0-9])(th|rd|st|nd)/, "$1"), a = a.replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i, (i, t, r) => (r.match(/b\.?c\.?/i) && (t = "-" + t), t)), a = a.replace(/c$/, ""));
      let n = Number(a);
      return isNaN(a) ? (console.warn("Spacetime: Invalid century input"), this) : (n === 0 && (n = 1), n >= 0 ? n = (n - 1) * 100 : n = (n + 1) * 100, this.year(n));
    }
    let e = this.startOf("century").year();
    return e = Math.floor(e / 100), e < 0 ? e - 1 : e + 1;
  },
  millenium: function(a) {
    if (a !== void 0) {
      if (typeof a == "string" && (a = a.replace(/([0-9])(th|rd|st|nd)/, "$1"), a = Number(a), isNaN(a)))
        return console.warn("Spacetime: Invalid millenium input"), this;
      a > 0 && (a -= 1);
      let n = a * 1e3;
      return n === 0 && (n = 1), this.year(n);
    }
    let e = Math.floor(this.year() / 1e3);
    return e >= 0 && (e += 1), e;
  }
}, bi = fi, f = Object.assign({}, di, hi, bi);
f.milliseconds = f.millisecond;
f.seconds = f.second;
f.minutes = f.minute;
f.hours = f.hour;
f.hour24 = f.hour;
f.h12 = f.hour12;
f.h24 = f.hour24;
f.days = f.day;
const gi = (a) => {
  Object.keys(f).forEach((e) => {
    a.prototype[e] = f[e];
  });
}, pi = gi, ja = function(a, e) {
  return a === 1 && ua(e) ? 29 : U[a];
}, yi = (a, e) => {
  if (a.month > 0) {
    let n = parseInt(a.month / 12, 10);
    a.year = e.year() + n, a.month = a.month % 12;
  } else if (a.month < 0) {
    let n = Math.abs(a.month), i = parseInt(n / 12, 10);
    n % 12 !== 0 && (i += 1), a.year = e.year() - i, a.month = a.month % 12, a.month = a.month + 12, a.month === 12 && (a.month = 0);
  }
  return a;
}, ki = (a, e, n) => {
  a.year = e.year(), a.month = e.month();
  let i = e.date();
  for (a.date = i - Math.abs(n); a.date < 1; ) {
    a.month -= 1, a.month < 0 && (a.month = 11, a.year -= 1);
    let t = ja(a.month, a.year);
    a.date += t;
  }
  return a;
}, Ai = (a, e, n) => {
  let i = e.year(), t = e.month(), r = ja(t, i);
  for (; n > r; )
    n -= r, t += 1, t >= 12 && (t -= 12, i += 1), r = ja(t, i);
  return a.month = t, a.date = n, a;
}, Ti = yi, wi = Ai, vi = ki, w = ["millisecond", "second", "minute", "hour", "date", "month"];
let P = {
  second: w.slice(0, 1),
  minute: w.slice(0, 2),
  quarterhour: w.slice(0, 2),
  hour: w.slice(0, 3),
  date: w.slice(0, 4),
  month: w.slice(0, 4),
  quarter: w.slice(0, 4),
  season: w.slice(0, 4),
  year: w,
  decade: w,
  century: w
};
P.week = P.hour;
P.season = P.date;
P.quarter = P.date;
const Si = {
  year: !0,
  quarter: !0,
  season: !0,
  month: !0,
  week: !0,
  date: !0
}, Ci = {
  month: !0,
  quarter: !0,
  season: !0,
  year: !0
}, zi = (a) => {
  a.prototype.add = function(e, n) {
    let i = this.clone();
    if (!n || e === 0)
      return i;
    let t = this.clone();
    if (n = H(n), n === "millisecond")
      return i.epoch += e, i;
    n === "fortnight" && (e *= 2, n = "week"), h[n] ? i.epoch += h[n] * e : n === "week" || n === "weekend" ? i.epoch += h.day * (e * 7) : n === "quarter" || n === "season" ? i.epoch += h.month * (e * 3) : n === "quarterhour" && (i.epoch += h.minute * 15 * e);
    let r = {};
    if (P[n] && P[n].forEach((s) => {
      r[s] = t[s]();
    }), Si[n]) {
      const s = t.timezone().current.offset - i.timezone().current.offset;
      i.epoch += s * 3600 * 1e3;
    }
    if (n === "month" && (r.month = t.month() + e, r = Ti(r, t)), n === "week") {
      let s = t.date() + e * 7;
      s <= 28 && s > 1 && (r.date = s);
    }
    if (n === "weekend" && i.dayName() !== "saturday")
      i = i.day("saturday", !0);
    else if (n === "date") {
      if (e < 0)
        r = vi(r, t, e);
      else {
        let s = t.date() + e;
        r = wi(r, t, s);
      }
      e !== 0 && t.isSame(i, "day") && (r.date = t.date() + e);
    } else if (n === "quarter") {
      if (r.month = t.month() + e * 3, r.year = t.year(), r.month < 0) {
        let s = Math.floor(r.month / 12), o = r.month + Math.abs(s) * 12;
        r.month = o, r.year += s;
      } else if (r.month >= 12) {
        let s = Math.floor(r.month / 12);
        r.month = r.month % 12, r.year += s;
      }
      r.date = t.date();
    } else if (n === "year") {
      let s = t.year() + e, o = i.year();
      if (o < s) {
        let m = Math.floor(e / 4) || 1;
        i.epoch += Math.abs(h.day * m);
      } else if (o > s) {
        let m = Math.floor(e / 4) || 1;
        i.epoch += h.day * m;
      }
    } else
      n === "decade" ? r.year = i.year() + 10 : n === "century" && (r.year = i.year() + 100);
    if (Ci[n]) {
      let s = U[r.month];
      r.date = t.date(), r.date > s && (r.date = s);
    }
    return Object.keys(r).length > 1 && u(i, r), i;
  }, a.prototype.subtract = function(e, n) {
    return this.clone().add(e * -1, n);
  }, a.prototype.minus = a.prototype.subtract, a.prototype.plus = a.prototype.add;
}, ji = zi, J = {
  millisecond: (a) => a.epoch,
  second: (a) => [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second()].join("-"),
  minute: (a) => [a.year(), a.month(), a.date(), a.hour(), a.minute()].join("-"),
  hour: (a) => [a.year(), a.month(), a.date(), a.hour()].join("-"),
  day: (a) => [a.year(), a.month(), a.date()].join("-"),
  week: (a) => [a.year(), a.week()].join("-"),
  month: (a) => [a.year(), a.month()].join("-"),
  quarter: (a) => [a.year(), a.quarter()].join("-"),
  year: (a) => a.year()
};
J.date = J.day;
const Ei = (a) => {
  a.prototype.isSame = function(e, n, i = !0) {
    let t = this;
    if (!n)
      return null;
    if (typeof e == "string" && typeof n == "object") {
      let r = e;
      e = n, n = r;
    }
    return (typeof e == "string" || typeof e == "number") && (e = new a(e, this.timezone.name)), n = n.replace(/s$/, ""), i === !0 && t.tz !== e.tz && (e = e.clone(), e.tz = t.tz), J[n] ? J[n](t) === J[n](e) : null;
  };
}, Mi = Ei, _i = (a) => {
  const e = {
    isAfter: function(n) {
      n = B(n, this);
      let i = W(n);
      return i === null ? null : this.epoch > i;
    },
    isBefore: function(n) {
      n = B(n, this);
      let i = W(n);
      return i === null ? null : this.epoch < i;
    },
    isEqual: function(n) {
      n = B(n, this);
      let i = W(n);
      return i === null ? null : this.epoch === i;
    },
    isBetween: function(n, i, t = !1) {
      n = B(n, this), i = B(i, this);
      let r = W(n);
      if (r === null)
        return null;
      let s = W(i);
      return s === null ? null : t ? this.isBetween(n, i) || this.isEqual(n) || this.isEqual(i) : r < this.epoch && this.epoch < s;
    }
  };
  Object.keys(e).forEach((n) => {
    a.prototype[n] = e[n];
  });
}, Pi = _i, Di = (a) => {
  const e = {
    i18n: (n) => {
      L(n.days) && fn(n.days), L(n.months) && Xe(n.months), Ge(n.useTitleCase) && gn(n.useTitleCase), L(n.ampm) && mi(n.ampm);
    }
  };
  Object.keys(e).forEach((n) => {
    a.prototype[n] = e[n];
  });
}, Ii = Di;
let Aa = se;
const S = function(a, e, n = {}) {
  this.epoch = null, this.tz = oa(e, Aa), this.silent = typeof n.silent < "u" ? n.silent : !0, this.british = n.dmy || n.british, this._weekStart = 1, n.weekStart !== void 0 && (this._weekStart = n.weekStart), this._today = {}, n.today !== void 0 && (this._today = n.today), Object.defineProperty(this, "d", {
    get: function() {
      let t = Ce(this), s = (new Date(this.epoch).getTimezoneOffset() || 0) + t * 60;
      s = s * 60 * 1e3;
      let o = this.epoch + s;
      return new Date(o);
    }
  }), Object.defineProperty(this, "timezones", {
    get: () => Aa,
    set: (t) => (Aa = t, t)
  });
  let i = me(this, a);
  this.epoch = i.epoch;
};
Object.keys(Qa).forEach((a) => {
  S.prototype[a] = Qa[a];
});
S.prototype.clone = function() {
  return new S(this.epoch, this.tz, {
    silent: this.silent,
    weekStart: this._weekStart,
    today: this._today,
    parsers: this.parsers
  });
};
S.prototype.toLocalDate = function() {
  return this.toNativeDate();
};
S.prototype.toNativeDate = function() {
  return new Date(this.epoch);
};
pi(S);
ji(S);
Mi(S);
Pi(S);
Ii(S);
const T = S, Ni = (a, e) => {
  let n = new T(null), i = new T(null);
  n = n.time(a), e ? i = i.time(e) : i = n.add(59, "minutes");
  let t = n.hour(), r = i.hour();
  return Object.keys(n.timezones).filter((o) => {
    if (o.indexOf("/") === -1)
      return !1;
    let m = new T(null, o), d = m.hour();
    return d >= t && d <= r ? !(d === t && m.minute() < n.minute() || d === r && m.minute() > i.minute()) : !1;
  });
}, Bi = Ni, Oi = "7.1.4", k = (a, e, n) => new T(a, e, n), da = function(a) {
  let e = a._today || {};
  return Object.keys(e).forEach((n) => {
    a = a[n](e[n]);
  }), a;
};
k.now = (a, e) => {
  let n = new T(new Date().getTime(), a, e);
  return n = da(n), n;
};
k.today = (a, e) => {
  let n = new T(new Date().getTime(), a, e);
  return n = da(n), n.startOf("day");
};
k.tomorrow = (a, e) => {
  let n = new T(new Date().getTime(), a, e);
  return n = da(n), n.add(1, "day").startOf("day");
};
k.yesterday = (a, e) => {
  let n = new T(new Date().getTime(), a, e);
  return n = da(n), n.subtract(1, "day").startOf("day");
};
k.extend = function(a = {}) {
  return Object.keys(a).forEach((e) => {
    T.prototype[e] = a[e];
  }), this;
};
k.timezones = function() {
  return new T().timezones;
};
k.max = function(a, e) {
  let n = new T(null, a, e);
  return n.epoch = 864e13, n;
};
k.min = function(a, e) {
  let n = new T(null, a, e);
  return n.epoch = -864e13, n;
};
k.whereIts = Bi;
k.version = Oi;
k.plugin = k.extend;
const qi = k;
var ee = function(a, e) {
  let n = Math.min(a.length, e.length);
  for (; n > 0; ) {
    const i = a.slice(0, n);
    if (i === e.slice(0, n))
      return i;
    n -= 1;
  }
  return "";
}, Ui = function(a) {
  a.sort();
  for (let e = 1; e < a.length; e++)
    a[e - 1] === a[e] && a.splice(e, 1);
};
const Ea = function() {
  this.counts = {};
}, ne = { init: function(a) {
  this.counts[a] === void 0 && (this.counts[a] = 0);
}, add: function(a, e) {
  e === void 0 && (e = 1), this.init(a), this.counts[a] += e;
}, countOf: function(a) {
  return this.init(a), this.counts[a];
}, highest: function(a) {
  let e = [];
  const n = Object.keys(this.counts);
  for (let i = 0; i < n.length; i++) {
    const t = n[i];
    e.push([t, this.counts[t]]);
  }
  return e.sort(function(i, t) {
    return t[1] - i[1];
  }), a && (e = e.slice(0, a)), e;
} };
Object.keys(ne).forEach(function(a) {
  Ea.prototype[a] = ne[a];
});
const Ma = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", ie = Ma.split("").reduce(function(a, e, n) {
  return a[e] = n, a;
}, {});
var x = function(a) {
  if (Ma[a] !== void 0)
    return Ma[a];
  let e = 1, n = 36, i = "";
  for (; a >= n; a -= n, e++, n *= 36)
    ;
  for (; e--; ) {
    const t = a % 36;
    i = String.fromCharCode((t < 10 ? 48 : 55) + t) + i, a = (a - t) / 36;
  }
  return i;
}, _a = function(a) {
  if (ie[a] !== void 0)
    return ie[a];
  let e = 0, n = 1, i = 36, t = 1;
  for (; n < a.length; e += i, n++, i *= 36)
    ;
  for (let r = a.length - 1; r >= 0; r--, t *= 36) {
    let s = a.charCodeAt(r) - 48;
    s > 10 && (s -= 7), e += s * t;
  }
  return e;
};
const $i = ";", Hi = ":", te = ",", Gi = "!", ra = 36, Ki = function(a, e) {
  let n = "", i = "";
  a.isTerminal(e) && (n += Gi);
  const t = a.nodeProps(e);
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (typeof e[s] == "number") {
      n += i + s, i = te;
      continue;
    }
    if (a.syms[e[s]._n]) {
      n += i + s + a.syms[e[s]._n], i = "";
      continue;
    }
    let o = x(e._n - e[s]._n - 1 + a.symCount);
    e[s]._g && o.length >= e[s]._g.length && e[e[s]._g] === 1 ? (o = e[s]._g, n += i + s + o, i = te) : (n += i + s + o, i = "");
  }
  return n;
}, de = function(a, e) {
  if (a.visited(e))
    return;
  const n = a.nodeProps(e, !0);
  for (let i = 0; i < n.length; i++) {
    const t = n[i], r = e._n - e[t]._n - 1;
    r < ra && a.histRel.add(r), a.histAbs.add(e[t]._n, x(r).length - 1), de(a, e[t]);
  }
}, ce = function(a, e) {
  if (e._n !== void 0)
    return;
  const n = a.nodeProps(e, !0);
  for (let i = 0; i < n.length; i++)
    ce(a, e[n[i]]);
  e._n = a.pos++, a.nodes.unshift(e);
}, xi = function(a) {
  a.nodes = [], a.nodeCount = 0, a.syms = {}, a.symCount = 0, a.pos = 0, a.optimize(), a.histAbs = new Ea(), a.histRel = new Ea(), ce(a, a.root), a.nodeCount = a.nodes.length, a.prepDFS(), de(a, a.root), a.symCount = function(e) {
    e.histAbs = e.histAbs.highest(ra);
    const n = [];
    n[-1] = 0;
    let i = 0, t = 0;
    const r = 3 + x(e.nodeCount).length;
    for (let s = 0; s < ra && e.histAbs[s] !== void 0; s++)
      n[s] = e.histAbs[s][1] - r - e.histRel.countOf(ra - s - 1) + n[s - 1], n[s] >= i && (i = n[s], t = s + 1);
    return t;
  }(a);
  for (let e = 0; e < a.symCount; e++)
    a.syms[a.histAbs[e][0]] = x(e);
  for (let e = 0; e < a.nodeCount; e++)
    a.nodes[e] = Ki(a, a.nodes[e]);
  for (let e = a.symCount - 1; e >= 0; e--)
    a.nodes.unshift(x(e) + Hi + x(a.nodeCount - a.histAbs[e][0] - 1));
  return a.nodes.join($i);
}, Li = new RegExp("[0-9A-Z,;!:|\xA6]"), Fi = { insertWords: function(a) {
  if (a !== void 0) {
    typeof a == "string" && (a = a.split(/[^a-zA-Z]+/));
    for (let e = 0; e < a.length; e++)
      a[e] = a[e].toLowerCase();
    Ui(a);
    for (let e = 0; e < a.length; e++)
      a[e].match(Li) === null && this.insert(a[e]);
  }
}, insert: function(a) {
  this._insert(a, this.root);
  const e = this.lastWord;
  if (this.lastWord = a, ee(a, e) === e)
    return;
  const n = this.uniqueNode(e, a, this.root);
  n && this.combineSuffixNode(n);
}, _insert: function(a, e) {
  let n, i;
  if (a.length === 0)
    return;
  const t = Object.keys(e);
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    if (n = ee(a, s), n.length !== 0)
      return s === n && typeof e[s] == "object" ? void this._insert(a.slice(n.length), e[s]) : s === a && typeof e[s] == "number" ? void 0 : (i = {}, i[s.slice(n.length)] = e[s], this.addTerminal(i, a = a.slice(n.length)), delete e[s], e[n] = i, void this.wordCount++);
  }
  this.addTerminal(e, a), this.wordCount++;
}, addTerminal: function(a, e) {
  if (e.length <= 1)
    return void (a[e] = 1);
  const n = {};
  a[e[0]] = n, this.addTerminal(n, e.slice(1));
}, nodeProps: function(a, e) {
  const n = [];
  for (const i in a)
    i !== "" && i[0] !== "_" && (e && typeof a[i] != "object" || n.push(i));
  return n.sort(), n;
}, optimize: function() {
  this.combineSuffixNode(this.root), this.prepDFS(), this.countDegree(this.root), this.prepDFS(), this.collapseChains(this.root);
}, combineSuffixNode: function(a) {
  if (a._c)
    return a;
  let e = [];
  this.isTerminal(a) && e.push("!");
  const n = this.nodeProps(a);
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    typeof a[r] == "object" ? (a[r] = this.combineSuffixNode(a[r]), e.push(r), e.push(a[r]._c)) : e.push(r);
  }
  return e = e.join("-"), this.suffixes[e] || (this.suffixes[e] = a, a._c = this.cNext++, a);
}, prepDFS: function() {
  this.vCur++;
}, visited: function(a) {
  return a._v === this.vCur || (a._v = this.vCur, !1);
}, countDegree: function(a) {
  if (a._d === void 0 && (a._d = 0), a._d++, this.visited(a))
    return;
  const e = this.nodeProps(a, !0);
  for (let n = 0; n < e.length; n++)
    this.countDegree(a[e[n]]);
}, collapseChains: function(a) {
  let e, n, i, t;
  if (!this.visited(a)) {
    for (n = this.nodeProps(a), t = 0; t < n.length; t++)
      e = n[t], i = a[e], typeof i == "object" && (this.collapseChains(i), i._g === void 0 || i._d !== 1 && i._g.length !== 1 || (delete a[e], e += i._g, a[e] = i[i._g]));
    n.length !== 1 || this.isTerminal(a) || (a._g = e);
  }
}, isTerminal: function(a) {
  return !!a[""];
}, uniqueNode: function(a, e, n) {
  const i = this.nodeProps(n, !0);
  for (let t = 0; t < i.length; t++) {
    const r = i[t];
    if (r === a.slice(0, r.length))
      return r !== e.slice(0, r.length) ? n[r] : this.uniqueNode(a.slice(r.length), e.slice(r.length), n[r]);
  }
}, pack: function() {
  return xi(this);
} };
Object.keys(Fi).forEach(function(a) {
});
const Wi = function(a, e, n) {
  const i = _a(e);
  return i < a.symCount ? a.syms[i] : n + i + 1 - a.symCount;
}, Ri = function(a) {
  const e = { nodes: a.split(";"), syms: [], symCount: 0 };
  return a.match(":") && function(n) {
    const i = new RegExp("([0-9A-Z]+):([0-9A-Z]+)");
    for (let t = 0; t < n.nodes.length; t++) {
      const r = i.exec(n.nodes[t]);
      if (!r) {
        n.symCount = t;
        break;
      }
      n.syms[_a(r[1])] = _a(r[2]);
    }
    n.nodes = n.nodes.slice(n.symCount, n.nodes.length);
  }(e), function(n) {
    const i = [], t = (r, s) => {
      let o = n.nodes[r];
      o[0] === "!" && (i.push(s), o = o.slice(1));
      const m = o.split(/([A-Z0-9,]+)/g);
      for (let d = 0; d < m.length; d += 2) {
        const b = m[d], A = m[d + 1];
        if (!b)
          continue;
        const I = s + b;
        if (A === "," || A === void 0) {
          i.push(I);
          continue;
        }
        const ea = Wi(n, A, r);
        t(ea, I);
      }
    };
    return t(0, ""), i;
  }(e);
}, Vi = function(a) {
  const e = a.split("|").reduce((i, t) => {
    const r = t.split("\xA6");
    return i[r[0]] = r[1], i;
  }, {}), n = {};
  return Object.keys(e).forEach(function(i) {
    const t = Ri(e[i]);
    i === "true" && (i = !0);
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      n.hasOwnProperty(s) === !0 ? Array.isArray(n[s]) === !1 ? n[s] = [n[s], i] : n[s].push(i) : n[s] = i;
    }
  }), n;
};
var Yi = "Africa/Abidjan\xA6a2bouake,daloa,san ped1t0yamoussouk1;g,ogo;ro;b0frica/timbuktu;idjan,obo|Africa/Algiers\xA6a5b3c2dz,oran,s1t0;ebessa,iaret;etif,idi bel abbes;hlef,onstantine;a0iskra,lida,oumerdas;b ezzouar,tna;lg0nnaba;eria,iers|Africa/Cairo\xA6a4bani suwayf,c3damanhur,eg2giza,halw6i1kafr ad dawwar,luxor,new c3port said,qina,s0tanta,zagazig;hibin al kawm,ohag,uez;dku,smail6;!ypt;airo;l2s0;w0yut;an; 1exandr0;ia;fayyum,m0;a0inya;hallah al kubra,nsurah|Africa/El_Aaiun\xA6e0laayoune,western sahara;h,l aaiun|Africa/Ceuta\xA6ceuta0;!melilla|Africa/Accra\xA6a2gh1kumasi,ta0;koradi,male;!ana;ccra,tsiaman|Africa/Bissau\xA6b1g0;uinea b0w;issau|Africa/Nairobi\xA6africa7e2kisumu,m1na0thika,yt;irobi,kuru;ayotte,ombasa;. africa standard 3a0ldoret;st0t; africa0ern africa;! 0;time; eastern,/asmera|Africa/Monrovia\xA6l0monrov1;iber0r;ia|Africa/Tripoli\xA6a3benghazi,l1misrat4t0zawi2;arhuna,ripoli;ib0y;ya;l khums,z zawiy0;ah|Africa/Casablanca\xA6a9casablanca,f8kenit7m4oujda angad,rabat,sa2t0;angier,e0;ma5touan;fi,le0;! al jadida;a1ekn3o0;hammedia,rocco;!rrakesh;ra;es;gadir,l hoceima|Africa/Maputo\xA6beira,c4ma2na1quelimane,z0;imbabwe,w;ca1mpu1;puto,to0;la;entral africa time,himoio|Africa/Windhoek\xA6africa central,na0windhoek;!mibia0;! standard time|Africa/Lagos\xA6aYbWcVeUgTiPjOkaMlKmHnFoCport harcourt,sBuAw0zarG;. central africa6a5est0; 0ern1;africa1central0; africa;! 0;s2t3;rCst,t;! s0;tandard t0;ime;gep,muah5yo;a9hagamu,okoto;kFn1w0yo;er5o;do,itsha;g,iger0newi;ia;a0in5ubi;idugu0kurdi;ri;agos,ek0;ki;du0no,tsi0;na;imeEos;badan,jebu ode,k1l0seAwo;a orangun,esa,or6;eAi7ot ekp0;ene;ombe,usau;bute ikorodu,fon alaaye,nugu;alabar,hakwama;auchi,en0;in;b2do1frica western,ku0tani;re; ekiti;a,eoku1u0;ja;ta|Africa/Khartoum\xA6a6c5el 4k2ny3omdurm1port sud1s0wad medani;d,inga,ud0;an;ass0hartoum,osti;ala;dae2fasher,obeid;at,entral africa;d damaz0l qadarif;in|Africa/Juba\xA6juba,s0winejok;outh sudan,s|Africa/Sao_Tome\xA6s0;ao tome,t|Africa/Ndjamena\xA6chad,n0td;'d0d0;jamena|Africa/Tunis\xA6sfax,t0;n,unis0;!ia|Africa/Johannesburg\xA6africa southern,bEcAd9east londBjohannesHk7newcastDp6r5s2tembisa,uitenhage,v1w0za;elkom,itbank;anderbijlpark,ereeniging;ast,o0prings;uth africa0weto;! standard time;andBichards bay,oodepoort;aarl,ietermaritzAort elizabeth,retoria;lerk0ruger0;sdorp;iepsloot,urb5;a1enturi0;on;pe town,rletonvil0;le;enoni,loemfontein,o1rakp0;an;ks0tshabelo;burg|America/Argentina/Buenos_Aires\xA6argentina/buenos aires|America/Argentina/Cordoba\xA6a0;merica/0rgentina/c1;c0rosario;ordoba|America/Argentina/Salta\xA6argentina/salta|America/Argentina/Jujuy\xA6a0;meric0rgentin0;a/jujuy|America/Argentina/Tucuman\xA6argentina/tucuman|America/Argentina/Catamarca\xA6a0;merica/0rgentina/c1;argentina/comodrivadavia,c0;atamarca|America/Argentina/La_Rioja\xA6argentina/la rioja|America/Argentina/San_Juan\xA6argentina/san juan|America/Argentina/Mendoza\xA6a0;meric0rgentin0;a/mendoza|America/Argentina/San_Luis\xA6argentina/san luis|America/Argentina/Rio_Gallegos\xA6argentina/rio gallegos|America/Argentina/Ushuaia\xA6argentina/ushuaia|America/Barbados\xA6b0;arbados,b|America/La_Paz\xA6bo1cochabamba,la paz,oruro,s0;anta cruz de la sierra,ucre;!livia0t;! time|America/Noronha\xA6atlantic islands,brazil/den0fernando de noronha standard time,n0;oronha|America/Belem\xA6ananindeua,belem,macapa,par0;auapebas,\xE1 (east) amap\xE1|America/Fortaleza\xA6ca2fortaleza,imperatriz,j1m0natal,sao luis,teresina;aracanau,ossoro;oao pessoa,uazeiro do norte;mpina grande,ucaia|America/Recife\xA6caruaru,jaboatao2olinda,p0recife;aulista,e0;rnambuco,trolina;! dos guararapes|America/Araguaina\xA6araguaina,palmas,tocantins|America/Maceio\xA6a0maceio;lagoassergipe,racaju|America/Bahia\xA6bahia,camacari,feira de santa0itabu0salvador,vitoria da conquista;na|America/Sao_Paulo\xA6a14b0Tc0Md0Je0Hf0Fg0Ahortol09i05j02l01mXnVosasco,pLriFs4ta3uber2v0;i0olta redon18;amao,la velha,tor14;a0Ml06;boao da ser00uba0Y;a2e1oroNu0;maLzano;rXte lago0L;nt4o 0;bernardo do campo,carl03jo0leopolLpaulo,vicE;ao de meriti,se0;! do0; rio p8s camp00;a 1o0; andDs;barbara d'oes0Nluz0Rmar0R;beirao 3o0;! 0;cla0de janei0g6ver7;ro;das nev07p0;reto;asso fun8e7iraci6lanalti0Mo4r0;aia g1esidente prud0;en0E;ran0;de;nta grossa,rto aleg0;re;caW;lotYtro0D;do;iteroi,ov0;aJo hamburgo;a1o0;gi das cruzSntes clarD;ri0ua;l05n6;imei2ondri06;acarei,oinville,u0;iz de fo0ndi9;ra;ndaia2patin1ta0;bor6pevi,quaquece1;ga;tuG;andW;o3ravat2uaru0;ja,lh0;os;ai;iQvernador valadarC;loria5oz do0ran2; iguacu;. south america Gast south ameri0mbu;ca;i0uque de caxi8;adema,vi0;noL;a1o0uriti2;ntagem,tI;choeiro de itapemirBmp1no3rapicui0scavel,xias do sul;ba;in1os dos goytacaz0;es;as;a9e5lumenau,r0;!a0st,t;silia1zil0;!/east;! 0;standard time;l1t0;im;ford roxo,o horizon0;te;rueri,uru;lvora4merica3na2parecida de goi0;an0;ia;polis;na;da|America/Campo_Grande\xA6campo grande,mato grosso do sul|America/Cuiaba\xA6cuiaba,mato grosso,varzea grande|America/Santarem\xA6par\xE1 (west),santarem|America/Porto_Velho\xA6porto velho,rond\xF4nia|America/Boa_Vista\xA6amazon1boa vista,central brazil0roraima;!ian0;! standard time|America/Manaus\xA6am0brazil/west,manaus;azonas (east),t|America/Eirunepe\xA6a0eirunepe;cre standard time,mazonas (west)|America/Rio_Branco\xA6a0brazil/a0rio branco;cre|America/Nassau\xA6b0nassau;ahamas,s|America/Belize\xA6b0;elize,z|America/St_Johns\xA6canada/newfoundland,n0st johns;d2ewfoundland0st,t;! 0;labrador (southeast),standard time;dt,t|America/Halifax\xA6a2canada/atlantic,halifax,n1p0;ei,rince edward island;ew brunswick,ova scotia;dt,st,tlantic0;! - ns (most areas) pe|America/Glace_Bay\xA6atlantic - ns (cape breton),glace bay|America/Moncton\xA6atlantic - new brunswick,moncton|America/Goose_Bay\xA6atlantic - labrador (most areas),goose bay|America/Blanc-Sablon\xA6ast - qc (lower north shore),blanc sablon|America/Toronto\xA6america/moBb9ca7eastern - onqc (most areas),gatineau,hamilAkitchener,l4m3nepe2o0quebec,richmond hill,toronto,vaugh2windsor;n5sh0tt0;awa;an;arkham,ississauga,o7;av7on0;don on0gueuil;tario;!nada0;!/eastern;arrie,ramp0;ton;ntre0;al|America/Nipigon\xA6nipigon|America/Thunder_Bay\xA6eastern - on (thunder bay),thunder bay|America/Iqaluit\xA6eastern - nu (most east areas),iqaluit|America/Pangnirtung\xA6eastern - nu (pangnirtung),pangnirtung|America/Atikokan\xA6atikokan,est - on (atikokan) nu (coral h)|America/Winnipeg\xA6c0m1winnipeg;anada/central,entral - on (west) m0;anitoba|America/Rainy_River\xA6central - on (rainy rft frances),rainy river|America/Resolute\xA6central - nu (resolute),resolute|America/Rankin_Inlet\xA6central - nu (central),rankin inlet|America/Regina\xA6c1regina,saskat0;c1oon;anada/saskatc0st - sk (most areas);hewan|America/Swift_Current\xA6cst - sk (midwest),swift current|America/Edmonton\xA6alberta,ca0edmonton,mountain - ab bc (e) sk (w);lgary,nada/mountain|America/Cambridge_Bay\xA6cambridge bay,mountain - nu (west)|America/Yellowknife\xA6mountain - nt (central),yellowknife|America/Inuvik\xA6inuvik,mountain - nt (west)|America/Creston\xA6creston,mst - bc (creston)|America/Dawson_Creek\xA6dawson creek,mst - bc (dawson crft st john)|America/Fort_Nelson\xA6fort nelson,mst - bc (ft nelson)|America/Whitehorse\xA6canada/yukon,pacific - yukon (south),whitehorse|America/Dawson\xA6dawson,pacific - yukon (north)|America/Vancouver\xA6b2canada/pacific,ladn1okanagan,pacific - bc (most areas),surrey,v0yukon;ancouv0ictor2;er;ritish columb0urnaby;ia|America/Santiago\xA6a7c4iquique,la pintana,puente alto,rancagua,san3t1v0;alparaiso,ina del mar;alca0emuco;!huano; bernardo,tiago;hile1l0oncepcion;!st,t;! (most areas),/continental;ntofagasta,rica|America/Punta_Arenas\xA6punta arenas,region of magallanes|America/Bogota\xA6armenGbBc7dosquebradas,floridablanca,i6m5neiva,p3s1v0;alledupar,illavicencio;anta marCincelejo,o0;acha,ledad;a0erei9opayan;lmi8sto;anizales,edellin,onterA;bague,taguei;a2o0ucu6;!lombia0st,t;! standard time;li,rtagena;arran3ello,ogo2u0;caramanga,enaventu0;ra;ta;cabermeja,quilla;ia|America/Costa_Rica\xA6c0;osta rica,r|America/Havana\xA6arroyo naranjo,b7c2diez de octubre,guantan9h1las tunas,pinar del rio,sant0;a clara,iago de cuba;avana,olguin;amaguey,i2u0;!ba0;! standard time;e0udad camilo cie0;nfueg1;ay1oyer0;os;amo|America/Curacao\xA6curacao,s0;t maarten,x|America/Santo_Domingo\xA6bella vista,do5la romana,san0; pedro de macoris,t0;iago de los caballeros,o domingo0;! 0;e0oe0;ste;!minican republic|America/Guayaquil\xA6cuenca,ec1guayaquil,ma0quito,santo domingo de los colorados;chala,nta;!uador0;! 0;(mainland),time|America/Cayenne\xA6cayenne,french guiana1gf0;!t;! time|America/Nuuk\xA6america/godthab,nuuk|America/Danmarkshavn\xA6danmarkshavn,national park (east coast)|America/Scoresbysund\xA6e1greenland eastern,scoresbysund0;!/ittoqqortoormiit;ast greenland1g0;st,t;! standard time|America/Thule\xA6thule0;!/pituffik|America/Guatemala\xA6g0mixco,villa nueva;t,uatemala|America/Guyana\xA6g0;eorgetown,uyana1y0;!t;! time|America/Tegucigalpa\xA6h0san pedro sula,tegucigalpa;n,onduras|America/Port-au-Prince\xA6c2p0;etionville,ort 0;au prince,de paix;arrefour,roix des bouquets|America/Jamaica\xA6j1k0new k0;ingston;amaica,m|America/Martinique\xA6m0;artinique,q|America/Mexico_City\xA6a0Gb0EcVduran09ecatepec de morel07guQhPiNjalis0Ileon de los alda03mInHoGpEqDs9t4uruap01v2x1yucat01za0;catec09pop00;alapa de enriqu0Ki0Gochimil0G;e0illahermosa;nustiano carranza,racruz;a3e7la1o0uxt00;luRnaZ;huac,l0quepaque,xcaY;nepantXpT;bas09maulip01pachuW;an0oledad de graciano sanch0C; luis potosi,t0;a maria chimal0iago de q1;huN;ueretaD;achuca de soFoza rica de6ue0;bPrto vallarZ;axaGjo de agua;aucalpan02icolas rome9uevo le01;agdalena contrerRexico3i1orel0x;ia,os;choFguel0; h3;! city,/general;rap5xtapalu9zta0;cSpalapa;idalJ;a1erre0stavo adolfo made0;ro;dalajara,naj0;ua0;to;eFhiCiudad Ao3u0;au1ernava0;ca;htemoc,titlan izcalli;a4l2yo0;ac0;an;i0onia del valle;ma;cChui0tzacoalc2;la;lopez mate0nezahualcoyotl;os;ap1lpancin0;go;as;laya,ntral 0;mexic0time;an,o;enito6uenavis0;ta;capulco3guascalientes,lvaro obreg2zcapotz0;al0;co;on; de0; juar0;ez|America/Cancun\xA6cancun,eastern standard time - quintana roo|America/Merida\xA6c0merida;ampeche,entral time - campecheyucat\xE1n|America/Monterrey\xA6c5g4mon3sa1t0victoria de durango;ampico,orreon;ltillo,n0; nicolas de los garza,ta catarina;clova,terrey;omez palacio,uadalupe;entral time - durango coahuilanuevo le\xF3ntamaulipas (most areas),iudad 0;apodaca,general escobedo,madero,victoria|America/Matamoros\xA6central time us - coahuilanuevo le\xF3ntamaulipas (us border),heroica m0m0nuevo laredo,reynosa;atamoros|America/Mazatlan\xA6culiac1los mochis,m0tepic;azatl0exico/bajasur,ountain time - baja california surnayaritsinaloa;an|America/Chihuahua\xA6chihuahua,m0;exic1ountain 0;mexico,standard time (mexico),time - chihuahua (most areas);an pacific standard time,o pacific|America/Ojinaga\xA6ciudad juarez,mountain time us - chihuahua (us border),ojinaga|America/Hermosillo\xA6ciudad obregon,hermosillo,mountain standard time - sonora,nogales|America/Tijuana\xA6america/e1e1mexic0pacific time us - baja california,tijuana;ali,o/bajanorte;nsenada|America/Bahia_Banderas\xA6bahia0central time - bah\xEDa de0; banderas|America/Managua\xA6man1ni0;!car0;agua|America/Panama\xA6pa0san miguelito;!nama|America/Lima\xA6arequiAc6huanc9i5juliaca,lima,p2sant1t0;acna,rujillo;a anita   los ficus,iago de sur5;e0iura,ucall7;!ru0t;! standard time;ca,quitos;allao,hi1us0;co;cl0mbote;ayo;pa|America/Miquelon\xA6m8p6s0;aint pierre1t0; pierre a3. pierre & miquelon s2;! 0;a1s0;tandard time;nd1;ierre0m; m0;iquelon|America/Puerto_Rico\xA6atlantic standard time,bayamon,p0;r,uerto rico|America/Asuncion\xA6asuncion,c3p0san lorenzo;araguay1y0;!st,t;! standard time;apiata,iudad del este|America/Paramaribo\xA6paramaribo,s0;r1uriname0;! time;!t|America/El_Salvador\xA6el1s0;an0oyapango,v; salvador|America/Grand_Turk\xA6grand turk,t0;c,urks and caicos|America/Port_of_Spain\xA6america/virg0port of spa0;in|America/New_York\xA6a0Pb0Mc0Fd0Ee0Af06g04hialeah,i01jZkYlexingtonXmTnMoKpIquHrDsAt7u5v3w0yonkers;ashington1est 0inston salem,orcD;raEvirgin03;! dc;ermont,irginia0;! beach;nited states,s0;!/0J;a0enne1he bronx,oleD;llaha0mpa;ssee;outh 1t0;. petersburg,aten3;bo0AcC;a2hode1ichmo04och0;ester; is01;lei2;eens,intana roo;ennsylvanMhiladelphMittsbur0rovidence;gh;hio,rlan0;do;ew3or1y0;!c;folk,th c0;aroliD; 0ark,port news;hampshiWje8york0;! staS;a1eads,i0;ami,chig1;ine,nhatt0ryLssachusetts;an;! fayetN;entucky,nox9;acks2e0;rsey;ndia1r0;on5;na;eorg0reensboro;ia;ayette1l0ort lauderda2;!orida;vil0;le;ast0dt,st; flatbush,ern0;! 0;(most areas),standard time;elawa9urham;ape coral,h3incinnati,leve1o0;lumbus,nnecticut;la0;nd;a0esapeake;rlot0ttanooga;te;altimo1o0rooklyn,uffalo;st3;re;kr1merica 0tlanta;eastern;on|America/Detroit\xA6detroit,eastern - mi (most areas),grand rapids,us/michigan|America/Kentucky/Louisville\xA6america0kentucky0;/louisville|America/Kentucky/Monticello\xA6kentucky/monticello|America/Indiana/Indianapolis\xA6americ0indian0us/east-indiana;a/indianapolis|America/Indiana/Vincennes\xA6indiana/vincennes|America/Indiana/Winamac\xA6indiana/winamac|America/Indiana/Marengo\xA6indiana/marengo|America/Indiana/Petersburg\xA6indiana/petersburg|America/Indiana/Vevay\xA6indiana/vevay|America/Chicago\xA6aVbScQdPfort worth,gOhNiLkZlImBn7o6plano,s3t1us/02wi0;chiFsconsV;ex0ulsa;!as;a0hreveport,ou4t 1;int 0n antonio;louGpaul;klahoWmaha,verland park;ashLe1or0;th dako7;braska,w 0;orleans,south me6;adisMe5i1o0;biHntgomery;lwaukee,nne1ss0;issippi,ouri;apol6so0;ta;mph4;aredo,i0ouisiana,ubb1;ncoln,ttle r0;ock;llino0owa,rving;is;oustAunts5;arland,rand prairie;allAes moines;dt,entral0hicago,orpus christi,st;! (most areas);aton rouge,rowns0;vil0;le;laba7m5r1ust0;in;k1lingt0;on;ans0;as;arillo,erica 0;central;ma|America/Indiana/Tell_City\xA6indiana/tell city|America/Indiana/Knox\xA6indiana/knox,us/indiana-starke|America/Menominee\xA6central - mi (wisconsin border),menominee|America/North_Dakota/Center\xA6north dakota/center|America/North_Dakota/New_Salem\xA6north dakota/new salem|America/North_Dakota/Beulah\xA6north dakota/beulah|America/Denver\xA6a1colorado springs,denver,el paso,m0navajo,salt lake,us/mountain;dt,ountain (most areas),st;lbuquerque,merica/shiprock,urora|America/Boise\xA6america mountain,boise,mountain0;! 0;- id (south) or (east),standard time|America/Phoenix\xA6a8c7g5idaho,m4n3phoenix,s2t1u0wyoming;s/a7tah;empe,ucson;cottsd3inaloa,onora;ayarit,ew mexico;aryv1esa,onta4st - arizona (except navajo);ilbert,lend0;ale;handler,olorado;rizo0;na|America/Los_Angeles\xA6aZbaXcVfRgarden grove,hOirviNlJmoGnFoCp8r7s0tacoma,us/00washington state;a1eattle,f,p0tocktPunrise manor;okaLringF;cramenFn0; 1ta 0;aPclariR;bernardiNdiego,fran0jo4;!cisco;ancho cucamonga,eLiver5;a0dt,ort5st;cific1radi0;se;! standard time;ak1cean0regDxnard;side;land;evada,orth las6;des1reno0; valley;to;a1o0;ng4s angeles;!s0; vegas;ne;enders1untington0; beach;on;onta2re0;mont,s0;no;na;a2hula vis0;ta;ja ca0kersfield;lifornia;merica 0naheim;pacific|America/Anchorage\xA6a0us/alaska;h4k4laska0nchorage;! 1n0;! s1;(most areas),s0;tandard time;dt,st|America/Juneau\xA6alaska - juneau area,juneau|America/Sitka\xA6alaska - sitka area,sitka|America/Metlakatla\xA6alaska - annette island,metlakatla|America/Yakutat\xA6alaska - y0y0;akutat|America/Nome\xA6alaska (west),nome|America/Adak\xA6a0hawaii standard time,us/aleutian;dak,leutian islands,merica/atka|America/Montevideo\xA6montevideo2u0;ruguay1y0;!st,t;! standard time|America/Caracas\xA6alto barinJbarIcCguaAm7p6san5turmeEv0;alencia,e0;!nezuela0t;! 0n;standard t0t0;ime; cristobal,ta teresa del tuy;eta4uerto la cruz;a0ucumpiz;raca0turin;ibo,y;ren8ti0;re;a4iudad 2o1u0;a,m2;ro;bolivar,guay0;ana;bim1rac1;in0quisimeto,uta;as|Asia/Dubai\xA6a4dubai,g2musaff1om0ras al khaim1sharj1;!an;ah;st,ulf0;! standard time;bu dhabi,jman|Asia/Kabul\xA6af1herat,jalalabad,ka0mazar e sharif;bul,ndahar;!ghanistan0t;! 0;standard t0t0;ime|Asia/Yerevan\xA6a0caucasus1yerevan;m,rmenia0;! standard time|Asia/Baku\xA6az0baku,ganja,lankaran,sumqayit;!erbaijan0t;! standard time|Asia/Dhaka\xA6asia/dacca,bDcBd9jess8khul7mymensingh,na4pa3ra2s1t0;angail,ungi;aid8hib4ylhet;jshahi,ng7;b3ltan,r naogaon;gar5r0t3;ayan0singdi;ganj;na;ore;haka,inaj0;pur;hattogram,o0;milla,x's bazar;a0d,ogra;gerhat,ngladesh0rishal;! standard time|Asia/Brunei\xA6b0;dt,n1runei0;! darussalam time;!t|Asia/Thimphu\xA6asia/thimbu,b0thimphu;hutan0t;! time|Asia/Shanghai\xA60:3I;1:38;2:36;3:39;4:3C;a3Eb31c2Nd2He30f2Cg26h1Qji1Ek1Bl0Ym0Wn0Tordos,p0Pq0Lrizh10s08t01wSxLyEz5;aoCh6i5ouc3unyi;bo,go0;a7en6ouk2u5; c3h33maWzh2;g2Vj1Izh2;b1Ung5o3D;jiakou5zh2;! shi xuanhua qu;ya0z27;an9i7u5;ci,e18n5;c3fu;b4c9n5ya0;cZgk2;c3g5ji,t2S;j17qu1sh16zh2;i6uc5;ha0;a6n5uyi0;di,gt2Nh1Fi0pu,t2Nx13ya0;m17n5;!g5ni0t0Eya0;t1ya0;aBe9u5;h6so0w1Bx5zh2;i,ue;a5u;i,n;i0Hn5;sh1zh2;fang5nxi1;di1;a8i6ong5;chuans0XhDli02sh1;an5eli0;j4sh0Z;i6ng5;gu,sh1;an,hec1Wyu1zh2;anmi0hAi8u5;i5zh2;h5zh2;ua;c5pi0;hu1;a7en6i5uangya14;jiaz15qi,y1;gli,ya0zh0G;n6o5s0I;gu1xi0;g5t2;h1Rqiu,rKyu;i5uan1J;aFn5o14qih0N;g5huangdH;dGh1N;an0Ting7rc,u5;ti1yang5;! H;ding0QxZ;an5eijYingbo;ch5ji0ni0to0ya0;a0o0;entoug2ianRuda5;njU;aEi8u5;anc3o6qi5;ao;he,ya0;a7jPn5upansh01;fTxia 5yi;chengguanI;n0Do5;c3y5;a0u1;i0Wn5ohek2;g5zh2;fa0;ai6un5;mi0sh1;fe0yu1;'1aAe9l4n6u5xi;jCt0W;an,c3g5i0zh2;de5li0zh2;zhE;ya0;musi,n8o5xi0;j6z5;uo;ia0;g5shF;m7xi;aFeBkt,ohhot,u5;a6i0Dlan ergi,m5n1;en;i7ng5y4;ga0s5;hi;'1b8n1;bi,f7ga0ng5ze;sh5ya0;ui;ei;i7n5rb4;d1g5;u,zh2;c3k2l5;ar;a9u5;an6i5li;l4ya0zh2;g5k2;do0yu1zh2;nsu,opi0;en7o6u5;ji1shQx4zh2;sh1;d2g5;hua0;a6eNong5;gu1hT;d6lian5ndo0qi0to0;!g;o5uk2;nghP;angHh5n,t;aAen7i5oYuG;fe0na5;! standard K;g5zh2;d5zho0;e,u;ng6o5;ya0zh2;ch7de,sh6zh5;i,ou;a,u;un;zh2;aBe5;i6n5;gbu,xi;'1h7jing5;! 5;time;ai;i7o5yan nur;di0t2;ou;c3sh1y4;an;he0;nAsia/5;ch6harb4;in;o5ungki0;ng5;qi0;da,qi0sh5ya0;an,un;ng|Asia/Urumqi\xA6a6changji,huoche5k3shihezi,turp2urumqi,xin1zh0;anjia4ongsh1;jiang time,yu0;an;a0orla;ramay,s2;ng;ksu,ral,sia/kas0;hgar|Asia/Nicosia\xA6cy0nicosia;!prus0;! (most areas)|Asia/Famagusta\xA6famagusta,northern cyprus|Asia/Tbilisi\xA6ge1kuta0tbil0;isi;!orgia0t;! 1n0;! 0;standard time|Asia/Hong_Kong\xA6h0kowloon,tsuen wan;k2ong0; kong0kong;! standard time;!st|Asia/Jakarta\xA6bScQdepPiNjKkediri,lJmGpArengasdengklPs4t2w0yogyakM;est0ib; indonesia,ern indonesia time;a0egal;n4sikmal3;ema4itubondo,outh tan3u0;kabumi,medaRra0;b0kF;aya;ge0;raN;a4e1robolinggo,urw0;akAokerto;ka1ma0rcut;laJtangsiantar;long2nbaru;daHl3mulaHruH;a1ed0;an;diun,laE;embaD;a0ember;k0mbi,vasumatra;arta;d,ndonesia0;! western;ok;i0urug;ampea,bino5leungsir,mahi,putat,rebon;a1e0injai,ogor;kasi,ngkulu;nd0tam;a0u1; aceh,r lampu0;ng|Asia/Pontianak\xA6borneo (westcentral),pontianak,tanjung pinang|Asia/Makassar\xA6b6c4denpa3indonesia central,k2l1ma0palu,samarinda,wita;kas2nado,taram;abuan bajo,oa jan7;endari,upang;sar;entral indonesia0ity of bal3;! time;a0orneo (eastsouth) sulawesi/celebesbalinusa tengarra timor (west);l0njarmasin;ikpap0;an|Asia/Jayapura\xA6ambon,east0indonesia eastern,jayapura,new guinea (west papua / irian jaya) malukus/moluccas,wit; indonesia,ern indonesia time|Asia/Jerusalem\xA6ashdod,beersheba,haifa,i2j0petah tiqwa,rishon leziyyon,tel aviv,west je1;e0mt;rusalem;d1l,srael0;! standard time;dt,t|Asia/Kolkata\xA60:3C;1:3K;2:2D;3:3L;4:3I;5:38;a36b2Ec25d1Xe1Vf1Tg1Gh1Di19j14k0Ql0Lm0Dn06odis3KpWquthbull5rOsGtAu9v6warang2Nyamun1Q;a7el1Vi6;jayawa2Wsakha0IzianagD;doda2Prana12;daip0jja24lhasn1ttar pradesh;a9eYh8iru6umk0;chirap0Nnelve2p6vottiy0;a39p0;ane,iruvananthapur0Ooothuku2Zriss0;mb6njo1Y;ar0M;aCecunder4hAi9lst,o8r1Gu6;jan37r6;at,endr1D;l5nip2O;k3liguLngrau2rK;ahj20i6ri2Pya0M;mo1Nvaji08;har1Ylem,mbh25ng2t05ug0Z;a7e0Foh6;iJtak;ebare2iAj8m6nc1Htl0Burke37;ag6g6p0;und09;a6kot;hmund27sth2B;ch0p0;aAimp9roddat0u6;ducher24n6rn18;a6e;sa;ri;li,n8rbha7t6;ia2Vna;ni;chku2Ti6;ha2Gp22;a8e7izam4o6;i1Wwrang5;l0Tw del0Z;di2Kg8i0Fjaf2Fn6re2Oshik,vi mumb16;ded,g6;i,loi j1W;ercoil,p0;a9eerut,irz5o8u6yso0Z;lugu,mb11rwa1Jzaffar6;n1p0;nghyr,rad4;chili8d7harasht1Gleg08n6thu1Gu;ga0Jip0;hya,ur0W;patnH;a8u6;cknow,dhia6;na;l bahadur6t0; n1;aEhaCo9u6;kat7lt6rno1P;a2i;pal2;l6rXta,zhikode;h5ka1Kl6;am;nd6ragp0;wa;kina14l9marPnp0r6shmir,tih3;i7na6ol ba19;l,tW;mn1;lakuric04y12;a7han6odOunagadh;si;b0Sip0l7m6;mu,n1shedp0;andh3gHna;chalkaranji,mph0Jn6st;!d6;ia6o01;! standard time,n;a7is3ospet,u6;b2g2;o0Ip0ridw3;aDhazi4oAreater noi0Nu7wali6y05;or;jar0PlbarRnt0rg7wa6;ha12;aon;rak7sa6;ba;hp0;juw9n6ya;dh7g6;an1;in1;aka;ar6iroz4;id4rukh4;l6taw0M;loG;aBe9h7indigul,ombPurg6;!ap0;anb0Uul6;ia;hra dun,l6was;hi;rbhan6vange9;ga;a09h9o6uttack;ch7imbato6;re;in;a7enn6;ai;nd6pM;a6i0C;!nn1;aOeLhCiAor8rahm5u6;landshahr,rh6;anp0;iv2;li;d3har sharif,j5kan07l6;asp0imoD;aBi8op7u6;baneshw3sav6;al;l7wan6;di,i;ai,wa7;g7ratp0tpa6vn1yand3;ra;alp0;l6ngaluru;gaum,la6;ry;hBli,r7thin6;da;a7ddham6eilly;an;n1s6;at;a7rai6;gh;ramp0;gQhmLizawl,jmKkoRlHmDnant5rrBs7urang4va6;di;ans8ia/ca6;lcut6;ta;ol;ah;ap0;arnath,batt0r6;ava6its3oA;ti;ur;appuz7i6lah4w3;garh;ha;er;adn1ed4;ab6;ad;ag3;ar;arta6ra;la|Asia/Baghdad\xA6a4ba3dihok,erbil,i2k1mosul,na0ramadi;jaf,sirB;arbala,irkuk,uwait;q,raq;ghdad,sr9;bu ghurayb,d diw6l 5rab0s sulaym6;! 3i0;a0c;!n0;! 0;standard time;amar2basrah al qadim2falluj2hill2kut,mawsil al jadid2;an0;iy0;ah|Asia/Tehran\xA6aRbNgorgXhamWiKkCmaBn8orumiy7pasragad branch,q4rasht,s2t1varam6yazd,za0;hedWnjW;abHehrV;a0hirSirjU;bzevar,nandEri,v3;a0om;rchak,zv0;in;eh;a0eyshabur;jaf0zar0;ab4;layer,shh3;a4erman3ho0;meyni sErram0wy;ab0sD;ad;!shah;h1r0;aj;riz;r0sfahC;!an0dt,st;! standard time;a2irjand,o0uk9;jnu0ruje0;rd;b3ndar abbas;b4hv3m2r1zads0;hahr;ak,dabil;ol;az;ad0;an|Asia/Amman\xA6amm1irbid,jo0russeifa,wadi as sir,zarqa;!rd0;an|Asia/Tokyo\xA60:11;1:19;a17ch15fu0Ygifu13h0Ni0Hj0EkYmSnLoJsEt8u7waka04y2;a5o2;k2no;kaic1Ao2;ha0Xsu0;maJo;ji,tsun0E;aka6o2sukuba;k4makom04y2;a0So2;hNna0ta;oro02us0Pyo04;m0Irazu0sa1tsu1;a4endZhi3o0u2;i0Yzu0;monose1zuo0;ita0Lk2ppoKsebo;ai,u05;dawa04i0Uka2sa0t0D;ya0Iza1;a5eyaga0Oi2umazu;i3shi2; tokyo0Hnomiya ha0F;ga0P;g2ha,ra0F;a2oW;no,o0sa1;a4i2orio0;na2to,yaza1;mirinkan,to;chiCeb3tsu2;do,m7ya06;as0H;aAi8o6u2y5;mam4r3shi2;ro;ashi1e,uG;oto;be,c0Bfu,ri2shigaJ;yaY;shiwa2takyushu;da;gosUkogawacho honmJmirenjaku,na7s4wa2;g2sa1;oe,uc05;hiZu2;g2kabe;ai;zaW;apan2dt,oetIp,st;! standard ti2;me;bara1chi3ta2wa1zu2;mi;ha4n2;omi2;ya;ra;a7i2oncho;meAr3t2;acP;a3os2;a1hiB;kaLtsu0;chi4kodate,mam2;at2;su;nohe,o2;ji;ji7ku2;i5o0s2ya3;hi2;ma;ka; sB;!sa5;i2ofu;ba,g4;geoshimo,k5mag3njo,omori,sahika2tsugi;wa;asa1;ki;as3i2;ta;hi|Asia/Bishkek\xA6bishkek,k0osh;g2yrgy0;stan,zstan0;! time;!t|Asia/Pyongyang\xA6chongjin,h5k3n2pyongya8s0won6;ariw0inui8unch'0;on;amp'o,orth korea;a0p;eso3nggye;a1ungnam,ye0;san;e1mhu0;ng;ju|Asia/Seoul\xA6anPbuMchHdaeGgChwaseoQiBjeAk7m6pohaFrok,s2u1wonJy0;aCeosu;ijeongbuPlsL;e1outh korea,u0;nEwH;joAo0;ngnamLul;asGokpo;imhae,orea0r,st,wangmyo7;! 0n 0;standard time;ju,on8;cCksBn6;angneu2oyaDu1wa0;ng5;mi,ns8riC;ng;gu,je4;angw3eon2in1un0;che2;ju;an,gju6;on;c1s0;an;heon2;san1ya0;ng0; si|Asia/Almaty\xA6a8central asia6east kazakhstan7k2nur sultan,p1s0taraz,ust kamenogorsk;emey,hymkent;avlodar,etropavl;a0z;ragandy,zakhstan0;! 0;(most areas),eastern;! standard0; time;lm0stana;aty,t|Asia/Qyzylorda\xA6kyzyl1qyzylorda0;!/kyzylorda/kzyl-0;orda|Asia/Qostanay\xA6k0q0;ostanay|Asia/Aqtobe\xA6a0;k1qt0;o1\xF6be/ak0;to0;be|Asia/Aqtau\xA6a1kazakhstan western,mangghysta\u016B/mankis2west asia0;! standard3;lma1q0;tau; ata,-ata0; time|Asia/Atyrau\xA6atyra0;u,\u016B/atirau/gur'yev|Asia/Oral\xA6oral,west kazakhstan|Asia/Beirut\xA6bei2e1l0ra's bay2;b,ebanon;astern european standard time,urope eastern;rut|Asia/Colombo\xA6colombo,dehiwala mount lavinia,lk,moratuwa,sri lanka|Asia/Yangon\xA6asia/rango3b2kyain seikgyi township,m0nay pyi taw,pathein,sittwe,yang3;a0eiktila,m,onywa,yanmar;ndalay,wlamyine;ago,urma;on|Asia/Ulaanbaatar\xA6m2ula0;anbaatar0n bator,t;! standard time;n,ongolia0;! (most areas)|Asia/Hovd\xA6bayan-\xF6lgiigovi-altaihovduvszavkhan,hov3w0;. mongolia 4est0; 0ern 0;mongolia;d0t;! 0;standard time|Asia/Choibalsan\xA6choibalsan,dornods\xFCkhbaatar|Asia/Macau\xA6asia/macao,m0;acau,o|Asia/Kuala_Lumpur\xA6alor setar,bukit mertajEgeorge town,ipoh,johor bahDk8m4petali3s0taipiC;e1hah alDu0;ba1ngai petani;pa9remb7;ng jaya;ala0y;cca,ysia0;! 0;(peninsula),time;ampung baru suba3la3ota bha4ua0;la 1nt0;an;lumpur,terengganu;ng;ru;am|Asia/Kuching\xA6k2miri,s0tawau;a0ibu;bahsarawak,ndakan;ota kinabalu,uching|Asia/Kathmandu\xA6asia/kat3biratnagar,kath3n1p0;atan,okhara;epal,p0;!t;mandu|Asia/Manila\xA6an04bWcRdaPgeneral santOiMlJmCnaBoAp4quezIsan1ta0zamboanga;clobZguig,rlac,ytE; 1t0;a ro2ol;fernando,jose del monte,pab01;a3h1uerto prince0;sa;!ilippine0t; standard time,s;gadiRnalanoy,s0;ay,ig;longapo,rmoc;ga,votQ;a0eycauayN;balacat,gugpo poblaci4kati,l3n0;da1ila,silingLtamp0;ay;luyong,ue;ingDol6;on;a1egaspi,i0ucena;bertad,pa;pu lapu,s p4;l0mus;igCoiH;os;smar0v5;inB;a0ebu,otabato;b1gayan de oro,in5l0;amba,ooc6;anatu5uy0;ao;a4inan2u0;d0tu2;ta;!gon0;an;co1guio,tang0;as;lod,or;geles,tipo0;lo|Asia/Karachi\xA6bKchiniJdera ghaziHfaisalGgujraFhyderGislamGjhang sadr,kDlaCm7nawabshah,okaAp4quetta,ra3s0;a1h0ialkIukkM;ahkHekhupu8;ddiqDhiwal,rgodha;him yarDwalpindi;akistan1eshawar,k0;!t;! standard time;a3i1u0;lt9zaffar7;ngo0rpur khas;ra;lir cantonment,rd6;hore,rkana;a0otli;moke,rachi,s8;n5t;abad; kh0;an;ot;a1himber,ure0;wala;hawalp0ttagram;ur|Asia/Gaza\xA6gaza1p0;alestine,s;! strip|Asia/Hebron\xA6east jerusalem,hebron,west bank|Asia/Qatar\xA6ar rayyan,doha,qa0;!tar|Asia/Yekaterinburg\xA6chelyabin7eka5k4magnitogor7nizhn3or2perm,s1tyumen,ufa,yek0zlatoust;a4t;terlitamak,urgut;enburg,sk;evartov3y tagil;amensk ural'skiy,urgan;terinburg0;! standard time;sk|Asia/Omsk\xA6oms0;k0t;! standard time|Asia/Novosibirsk\xA6n0siber4;. central asia 4o0;rth central as2v0;osibirsk0t;! 1;ia;standard time|Asia/Barnaul\xA6b0;arnaul,iysk|Asia/Tomsk\xA6tomsk|Asia/Novokuznetsk\xA6kemerovo,novokuznet0prokop'yev0;sk|Asia/Krasnoyarsk\xA6kra0north asia1;snoyarsk0t;! standard time|Asia/Irkutsk\xA6angar2brat2irk0north asia east1ulan ude;t,utsk0;! standard time;sk|Asia/Chita\xA6chita|Asia/Yakutsk\xA6blagoveshchensk,yak0;t,utsk0;! standard time|Asia/Khandyga\xA6khandyga|Asia/Vladivostok\xA6k2vla0;divostok0t;! standard time;habarovsk0omsomolsk on amur;! vtoroy|Asia/Ust-Nera\xA6ust nera|Asia/Magadan\xA6mag0;adan0t;! standard time|Asia/Sakhalin\xA6sak0yuzhno sakhalinsk;halin0t;! standard time|Asia/Srednekolymsk\xA6chokurdakh,sre0;dnekolymsk0t;! standard time|Asia/Kamchatka\xA6kamchatka,pet0;ropavlovsk0t; kamchatsky,-kamchatski standard time|Asia/Anadyr\xA6ana0;dyr0t;! standard time|Asia/Riyadh\xA6a6burayd5dammam,ha4jedd5khamis mushait,me3najran,riyadh,sultan5ta2y0;anbu,e0;!men;'if,buk;cca,dina;'il,far al batin;ah;bha,l 0;hufuf,jubayl,kharj,mubarraz|Asia/Singapore\xA6s0woodlands;g1ingapore0;! standard time;!t|Asia/Damascus\xA6a4d3h2latak1sy0;!r0;ia;am2oms;amascus,eir ez zor;leppo,r raqq0;ah|Asia/Bangkok\xA6bangkok,ch8h6indochina3mueang nontha9na2pak kret,s0udon thani;amut prakan,e asia0i racha,outh east asia;! standard t3;khon ratchasima,m dinh;! 0;(most areas),t0;ime;a0ue;iphong,noi,t y2;iang m1on 0;buri;ai|Asia/Dushanbe\xA6dushanbe,t0;ajikistan1j0;!t;! time|Asia/Dili\xA6dili,east timor1tl0;!t;! time|Asia/Ashgabat\xA6as4t0;m2urkmen0;a3istan0;! standard time;!st,t;hga0ia/ashkhabad;bat|Asia/Taipei\xA6banqiao,h7k5roc,t0;a0w;i0oyu2;ch3n1pei0w1;! standard time;an;aohsi0eel0;ung;sinchu,ualien|Asia/Samarkand\xA6bukhara,nukus,qarshi,samarkand,uzbekistan 0;(west),standard time|Asia/Tashkent\xA6andij2namangan,qo`q2tashkent,uz0;!bekistan0t;! (east);on|Asia/Ho_Chi_Minh\xA6asia/saig4bien hoa,can tho,da 2ho chi minh,nha tr3qui nh4rach gia,sa dec,thi xa phu my,v0;ietnam0n,ung tau;! (south);lat,n0;ang;on|Atlantic/Bermuda\xA6b0;ermuda,m|Atlantic/Cape_Verde\xA6c0;a1v0;!t;bo verde,pe verde0;! standard time|Atlantic/Canary\xA6canary0las palmas de gran canaria,santa cruz de tenerife;! islands|Atlantic/Stanley\xA6f0stanley;alkland1k0;!st;! island0;!s0;! summer time|Atlantic/Faroe\xA6atlantic/faeroe,f0;aroe0o;! islands|Atlantic/South_Georgia\xA6gs,south georgia0;! time|Atlantic/Reykjavik\xA6i0reykjavik;celand,s|Atlantic/Madeira\xA6madeira0;! islands|Atlantic/Azores\xA6azo0hmt;res0st,t;! standard time|Australia/Lord_Howe\xA6australia/lhi,l0;h2ord howe0;! 0;island,standard time;dt,st|Australia/Hobart\xA6australia/1hobart,tasmania0;! (most areas);currie,tasmania|Australia/Melbourne\xA6australia/victoria,geelong,melbourne|Australia/Sydney\xA6au0c4new south wales (most areas),sydney,wollongong;!s0; east3tralia0;! eastern,/0n eastern 4;act,c0nsw;anberra;!ern0;! 0;standard time|Australia/Broken_Hill\xA6australia/yancowinna,broken hill,new south wales (yancowinna)|Australia/Brisbane\xA6a1brisbane,gold co3logan,queensland0townsville;! (most areas);e2ustralia0;/queensland,n e0;ast;dt,st|Australia/Lindeman\xA6lindeman,queensland (whitsunday islands)|Australia/Adelaide\xA6a2cen0south1;. australia 4tral0; australia;c3delaide,ustralia0; central,/south,n central0;! 0;standard time;dt,st|Australia/Darwin\xA6australia/north,darwin,northern territory|Australia/Perth\xA6a3perth,w0;. australia6est0; australia,ern australia0;! (most areas);ustralia1w0;dt,st; western,/west,n west0;!ern0; standard time|Australia/Eucla\xA6a0cw5eucla,western australia (eucla);cw6us0; central w2tralia0; centralwestern,n central western0;! 2;. 1e0;st;standard time;dt,st|Indian/Cocos\xA6c0;c3ocos0;! island0;!s0;! time;!t|Indian/Christmas\xA6c0;hristmas1x0;!t;! island0;! time|Indian/Chagos\xA6british indian ocean territory,c4i0;ndian 1o0;!t;c1ocean0;! time;hagos|Indian/Mauritius\xA6m0port louis;auritius1u0;!t;! standard time|Indian/Maldives\xA6m0;aldives1v0;!t;! time|Indian/Reunion\xA6r0;e1\xE9union0; time,crozetscattered islands;t,union|Indian/Mahe\xA6mahe,s0;c,eychelles0;! time|Indian/Kerguelen\xA6french southern2kerguelen1tf0;!t;!st paul islandamsterdam island;! 0;& antarctic time,and antarctic0;! lands|Europe/Andorra\xA6a0;d,ndorra|Europe/Tirane\xA6al1tiran0;a,e;!bania|Europe/Vienna\xA6a0donaustadt,favoriten,graz,linz,vienna;t,ustria|Europe/Brussels\xA6antwerpen,b0charleroi,gent,liege;e0russels;!lgium|Europe/Sofia\xA6b0plovdiv,sof2varna;g,u0;lgar0rgas;ia|Europe/Minsk\xA6b2h1m0viteb3;ahilyow,in2;omyel,rodna;abruy0elarus,rest,y;sk|Europe/Zurich\xA6geneve,li0swiss time,zurich;!echtenstein|Europe/Prague\xA6brno,ostrava,prague,s0;k,lovakia|Europe/Berlin\xA6a00bScQdOeMfrLgeJhaEkClAm4n3oberhaus04rostoBs1w0;andsbek,iesbad03uppert8;a0tuttgaL;arbrueck01xony;eue neustadt,uernbeY;a3e2iddle european,oenchengladba1u0;enst9ni0;ch;st,t;gdeSinz,nnheim,rienth0;al;eipzJuebe0;ck;a0iKoeln,rL;rlsruhe,ssJ;gPlle (saale),m1nnov0rM;er;burg0m;! 0;mitte,nord;lsenkirJrmany0;! (most areas);ankfurt am maDeiF;imsbuettArfu0ssH;rt;e,ortmund,resdFu0;esseldorf,isB;e0hemnitz;ntral europe,st,t;avaria,erl6iel5o2r0;aunschwe0emA;ig;chum0nn;! hord0;el;efeld;in;a2ltona,ugs0;bu0;rg;ch0;en|Europe/Copenhagen\xA6arhus,copenhagen,d0;enmark,k|Europe/Tallinn\xA6e0tallinn;e,stonia|Europe/Madrid\xA6aMbJcHeGfuenDgCjerez de la frontera,lBm8ovieFp6s1terrassa,v0zaragoza;alladol9igo;a1evilla,pain0;! (mainland);badell,n0; sebastian,t0; marti,ander,s montjuic;a0uente de vallecas;lma,mpD;a0ostolGurcF;dr0laga;id;atiEeganD;asteiz / vitorBijon,ran1;carral el par1labr0;ada;do;ixample,lche,s;a0iudad lineal;rabanchel,stello de la pla7;a0ilbao,urgos;da0rce0sque;lo4; coru3l0;cala de henar1icante,mer0;ia;es;na|Europe/Helsinki\xA6espoo,fi1helsinki,t0vantaa;ampere,urku;!nland|Europe/Paris\xA6bordeaux,ceDeurope central,frBl9m8n6paris,r3s0toulouE;aint 1t0; 0rasbourg;etienne;e1omance0;! A;ims,nn1;ant0i5ormandy;es;arsei1ontpellier;e havre,i0yon;lle;!an0;ce;ntral european 1rgy pontoi0;se;standard time|Europe/London\xA6a0Hb05c02dZeXgUhSiPjeOkingston upon hull,lJmHnBoxTp9reading,s1w0yF;arwick05igan,olverha7;heffield,o3t2u1w0;an4iH;ffolk,nderland,sUttM;afOoke on tre05;meUuth0;a1end on 0;sea;mptH;ly0orts0restG;mouth;ew4o0;r0ttinghamO;th0wD; y0amptonM;orkQ;castle upon tyne,port;ancheLi0;dlan4lton keynes;ancaMdn,e2i1o0ut6;nd5;ncolnKverP;e0icesterE;ds;!rsQ;psw1slingt0;on;ich;ampDert0;fordC;b1l0mt standard time;asgow,oucesterA;!-eA;dinburgh,s0urope/belI;sex;erby1o0udlF;rset;!sh5;a1ity of westmin0oventry,rawlC;ster;mbridge1rdiff;e8ir7lack5r2st,uckingham0;sh0;ire;adford,e1i0;st2tish;nt;po0;ol;kenhead,mingham;l1xl0;ey;fast;berdeen,rchway|Europe/Gibraltar\xA6gi0;!braltar|Europe/Athens\xA6athens,gr0thessaloniki;!eece|Europe/Budapest\xA6budapest,debrecen,hu0;!ngary|Europe/Dublin\xA6cork,dublin,eire,i0;e,reland|Europe/Rome\xA6b9c8florence,genoa,m7naples,p4rome,sicily,t2v0;a0eroA;!tican city;aran2rieste,u0;rin,scany;a1ra0;to;dova,lermo;essi3ilan;atan1orsica;ari,olog1resc0;ia;na|Europe/Vilnius\xA6k1l0vilnius;ithuania,t;aunas,laipeda|Europe/Luxembourg\xA6lu0;!xembourg|Europe/Riga\xA6e1kalt,l0riga;atvia,v;ast europe,e0;st,t|Europe/Monaco\xA6m0;c,onaco|Europe/Chisinau\xA6chisinau,europe/tiraspol,m0;d,oldova|Europe/Malta\xA6m0;alta,t|Europe/Amsterdam\xA6a3eindhov2groning2n1rot4t0utrecht;he hague,ilburg;etherlands,l;en;lmere stad,ms0;terdam|Europe/Oslo\xA6berg1oslo,s0;j,valbard and jan may0;en|Europe/Warsaw\xA6bDczestochowa,g9k7l5mokot8p3radFs2torun,w0zabrze;ars0rocl0;aw;osnowiec,zczec3;l,o0raga poludnie;land,znan;odz,ubl0;in;ato2iel3rak0;ow;d2li0;wi0;ce;ansk,ynia;i2y0;dgoszcz,t0;om;alystok,elsko biala|Europe/Lisbon\xA6amadora,europe western,lisbon,p2we0;st0t;! europe,ern european standard time;ort0t;o,ugal0;! (mainland)|Europe/Bucharest\xA6b3c2gala1iasi,oradea,ploies1ro0timisoara;!mania;ti;luj napoca,onstanta,raiova;ra0ucharest;ila,sov|Europe/Belgrade\xA6belgrade,n1pristina,s0;i,lovenia;is,ovi sad|Europe/Kaliningrad\xA6kaliningrad|Europe/Moscow\xA6ar0Cb09c06dzerzh05fet,grozn04ivano03kXlipet0EmQnMorel,pJrFs8t6v2w-su,y0zelenograd;a0oshkar oV;roslavl,sene01;asyl'evsky ostrHelikiLladi2o0ykhino zhulebS;l0ronezh;gograOogda;kavkaz,m07;a0uPver;ganrog,mbC;a4ever3hakhty,molen05ochi,t0yktyvkQ; 4a0;ryy osk0vrop0;ol;nRodvS;int 0rW;petersburg;ostov na donu,u1y0;azKbO;!ssia0;!n9;e1odolUsk0;ov;nza,trozavodS;a2izhn0ovorossiyR;ekamQi0;y novM;berezhnyye chelny,l'chik;a3dst,oscow1s0urmJ;d,k;! standar0;d time;khachka1r'0;ino;la;a2himki,ostroma,rasno0urG;d0gvargeisky;ar;l1z0;an;ininsk5uga;vo;yy;in8;entraln1he0;boksary,repovets;iy;el1ry0;an3;gorod;khangel'1mav0;ir;sk|Europe/Simferopol\xA6simferopol|Europe/Kirov\xA6kirov|Europe/Volgograd\xA6vol0;gograd,t,zhskiy|Europe/Astrakhan\xA6astrakhan|Europe/Saratov\xA6balakovo,saratov|Europe/Ulyanovsk\xA6ulyanovsk|Europe/Samara\xA6izhevsk,s0togliatti on the volga;am0yzran;ara0t;! standard time|Europe/Stockholm\xA6goeteborg,malmoe,s0;e,tockholm,weden|Europe/Istanbul\xA6a00bUcSdQeNgMiKkImDosmCs6t1u0v07zeytinburnu;eskuedYmrB;arsus,r3urkey0;! 0;standard t0t0;ime;!abzon,t;a3i1ultan0;beyJgazi;sIv0;as,erek;msun,n0;cakt5liurfa;aniye;a1er0uratpaH;kezefendi,sin;l0niF;atOt0;epe;a0irikkale,onMutahM;hramanmaras,rabaglFyseP;stanbul,zmi0;r,t;aziantep,ebze;lazig,rzurum,s0;en0kiC;l8yurt;eniz0iyarbakB;li;ankaCor0;lu,um;a1ur0;sa;gcil2hcelievl1likes5sak4t0;ikent,m9;er;ar;d5n2rnavutkoey,ta0;seh0;ir;kara,ta0;k0l0;ya;a1iyam0;an;na,paza0;ri|Europe/Kiev\xA6bila tserkHcherEdChorlBivano frankivDk7l6m4odessa,poltaHrivne,sumy,ternopil,u2vinnyts1z0;aporizhzh0hytomyr;ya;a,kraine0;! (most areas);a0ykolayB;ki5riupol;ut6v9;amyanske,h1iev,r0y8;emenchuk,opyv1yvyy rih;ark6erson,mel0;nytskyy;ivka;nipro,onet0;sk;kasy,ni0;h0vtsi;iv;va|Europe/Uzhgorod\xA6ruthenia,uzhgorod|Europe/Zaporozhye\xA6luhansk,sevastopol,zaporozh0;'ye/zaporizhia lugansk/luhansk (east),ye|Antarctica/Casey\xA6casey0;! time|Antarctica/Davis\xA6a1davis0;! time;ntarctica,q|Antarctica/DumontDUrville\xA6dumont0;-d0d1;'0\u2019urville time;urville|Antarctica/Mawson\xA6mawson0;! time|Antarctica/Palmer\xA6chile standard time,palmer|Antarctica/Rothera\xA6rothera|Antarctica/Syowa\xA6syowa0;! time|Antarctica/Troll\xA6troll0;! research station|Antarctica/Vostok\xA6vost0;!ok0;! time|Antarctica/Macquarie\xA6macquarie0;! island|Pacific/Pago_Pago\xA6pa0samoamidway,us1;cific0go pago;/samoa|Pacific/Rarotonga\xA6c0rarotonga;k2ook0;! islands0;! standard time;!t|Pacific/Easter\xA6chile/easterisland,e0;as0mt;st,t0;!er0;! island0;! standard time|Pacific/Galapagos\xA6gal0;apagos,t,\xE1pagos islands|Pacific/Fiji\xA6f0;iji1j0;!st,t;! standard time|Pacific/Chuuk\xA6chuuk1pacific/0;truk,y1;!/truky0;ap|Pacific/Pohnpei\xA6f3micro4p0;acific/1f,ohnpei0;!/0;ponape;m,rench poly0;nesia|Pacific/Kosrae\xA6kosrae0;! time|Pacific/Guam\xA6ch1guam,mp,northern mariana islands,west0; pacific1ern pacific;amorro0st;! standard time|Pacific/Tarawa\xA6gilbert islands0tarawa;! time|Pacific/Enderbury\xA6enderbury,phoenix islands0;! time|Pacific/Kiritimati\xA6ki3line islands0;! 0;standard t0t0;ime;!ri0;bati,timati0;! island|Pacific/Majuro\xA6m0;a0h;juro,rshall islands0;! (most areas)|Pacific/Kwajalein\xA6kwajalein,marshall islands time|Pacific/Noumea\xA6n0;c,ew caledonia0oumea;! standard time|Pacific/Nauru\xA6n0;auru0r;! time|Pacific/Niue\xA6n0;iue1u0;!t;! time|Pacific/Auckland\xA6auckland,christchurch,manukau,n0wellington;ew zealand1orth shore,z0;!dt,mt,st;! 0;standard t0t0;ime|Pacific/Chatham\xA6cha0nz-chat;dt,st,tham0;! 0;islands0s1;! s0;tandard time|Pacific/Tahiti\xA6society islands,tahiti0;! time|Pacific/Marquesas\xA6marquesas0;! 0;islands,standard t0t0;ime|Pacific/Gambier\xA6gambier0;! 0;islands,time|Pacific/Port_Moresby\xA6p0;apua new guinea0g,ort moresby;! (most areas)|Pacific/Bougainville\xA6bougainville,guinea0papua new guinea time;!n|Pacific/Pitcairn\xA6p0;itcairn0n;! time|Pacific/Palau\xA6p0;alau0w;! time|Pacific/Guadalcanal\xA6guadalcanal,s0;b,olomon0;! islands0;! time|Pacific/Fakaofo\xA6fakaofo,t0;k1okelau0;! time;!t|Pacific/Tongatapu\xA6nuku'alofa,to0;!nga0;! standard time,tapu|Pacific/Funafuti\xA6funafuti,t0;uvalu0v;! time|Pacific/Wake\xA6u2wake0;! island0;! time;m,s minor outlying islands|Pacific/Honolulu\xA6aleutian2h0pacific/johnston,us/hawaii;awaii0onolulu,st;! aleutian,-aleutian 1;! 0;standard time|Pacific/Efate\xA6efate,v0;anuatu0u;! standard time|Pacific/Wallis\xA6w0;allis0f;! 0;& futuna time,and futuna|Pacific/Apia\xA6apia,s2w0;est0s; samoa time,ern s0;amoa|ETC/GMT\xA6gmt|Etc/GMT\xA6coordinated universal1greenwich0;! mean0; time|Etc/UTC\xA6etc/uct,u0zulu;ct,niversal,tc|America/Argentina\xA6arNbKcHformosa,jGla EmBneuquen,pAquilmJr9sa1t0;ierra del fuego (tLucum\xE1n (tm);lta6n0; 2t0;a 0iago del estero;cruz (sc),fe;juan1luis0miguel de tucuman,salvador de jujuy;! (sl);! (sj);! (salpnqrn);esistencia,osario;araDilar,osadas;ar del p3e0oron;ndoza0rlo;! (mz);p0rioja (lr);lata;ose c paz,ujuy (jy);atamarca (ct) chubut (ch),or0;doba,rient0;es;ahia blanca,uenos aires0;! (bac0;f);!genti0;na|Australia/Currie\xA6tasmania (king island)|America/Godthab\xA6g3w0;est greenland1g0;st,t;! s3;l,reenland0;! 0;(most areas),s0western;tandard time|America/Kentucky\xA6eastern - ky (0louisville;louisville area),wayne)|America/Indiana\xA6central 3eastern - in (0fort wayne,indianapolis;crawfor1dadukmn),most areas),p0switzerlan1;i3ulaski);d);- in (0standard time;perry),star0;ke)|America/North_Dakota\xA6central - nd (0;m0oliv1;erc0orton rural);er)|Africa/Kinshasa\xA6c3ki2m0;a0bandaka;sina,tadi;kwit,nshasa;d,ongo|Africa/Luanda\xA6huambo,l0n'dalatando;obito,uanda|Africa/Addis_Ababa\xA6addis ababa,dire dawa,mek'ele,nazret|Africa/Dar_es_Salaam\xA6arusha,d1m0tanga,zanzibar;beya,orogoro,wanza;ar es salaam,odoma|Africa/Mogadishu\xA6berbera,hargeysa,jamaame,kismayo,m0;arka,ogadishu|Africa/Dakar\xA6dakar,pikine,t0;hies0ouba;! nones|Asia/Aden\xA6a0ibb,mukalla,sanaa,taiz;den,l hudaydah|Africa/Conakry\xA6c0;amayenne,onakry|Asia/Phnom_Penh\xA6ict,phnom penh,takeo|Africa/Harare\xA6bulawayo,chitungwiza,har0mut0;are|Indian/Antananarivo\xA6ant0toamasina;ananarivo,sirabe|Africa/Lubumbashi\xA6b3k2l1m0tshikapa;buji mayi,wene ditu;ikasi,ubumbashi;ananga,isanga1olwezi;e0ukavu;ni|Africa/Kampala\xA6kampala|Africa/Douala\xA6b1douala,edea,gar2kousseri,loum,m0ngaoundere,yaounde;ar1okolo;a1ert0;oua;foussam,menda|Africa/Bamako\xA6bamako|Africa/Brazzaville\xA6brazzaville,pointe noire|Africa/Lusaka\xA6k0lusaka,ndola;ab0it0;we|Africa/Ouagadougou\xA6bobo dioulasso,ouagadougou|Africa/Freetown\xA6freetown|Asia/Muscat\xA6muscat,seeb|Africa/Porto-Novo\xA6abomey calavi,coton0djoug0porto novo;ou|Africa/Niamey\xA6niamey,zinder|Africa/Lome\xA6lome|Africa/Kigali\xA6kigali|Europe/Zagreb\xA6split,zagreb|Europe/Sarajevo\xA6banja luka,sarajevo|Africa/Nouakchott\xA6nouakchott|Africa/Blantyre\xA6blantyre,lilongwe,mzuzu|Asia/Kuwait\xA6al ahmadi|Africa/Djibouti\xA6djibouti|Africa/Libreville\xA6libreville|Africa/Asmara\xA6asmara|Africa/Bangui\xA6bangui|Europe/Skopje\xA6skopje|Europe/Bratislava\xA6bratislava,kosice|Africa/Banjul\xA6serekunda|Africa/Bujumbura\xA6bujumbura|Europe/Ljubljana\xA6ljubljana|Europe/Podgorica\xA6podgorica|Africa/Gaborone\xA6gaborone|Asia/Vientiane\xA6vientiane|Asia/Saigon\xA6ho chi minh city|America/Port_Of_Spain\xA6vi0;!rgin islands|America/Port-au-prince\xA6h0;aiti,t|Pacific/Norfolk\xA6n0;f,orfolk 0;island0s1;! s0;tandard time|America/Buenos_Aires\xA6ar0;gentina standard time,st,t|Pacific/Midway\xA6s0;amoa standard time,dt,st|Asia/Katmandu\xA6nepal 0;standard t0t0;ime|Asia/Rangoon\xA6myanmar 0;standard t0t0;ime|Pacific/Truk\xA6chuuk time,truk|Pacific/Ponape\xA6ponape0;! time|America/Santa_Isabel\xA6mexico northwest,northwest mexico standard time,pacific 0;mexico,standard time (mexico)|Brazil/Acre\xA6act|Asia/Thimbu\xA6btt", Ji = {
  "gmt+0": "etc/Gmt",
  "gmt-0": "etc/Gmt",
  gmt0: "etc/Gmt",
  "etc/gmt+0": "Etc/Gmt",
  "etc/gmt-0": "Etc/Gmt",
  "etc/gmt0": "Etc/Gmt",
  "msk-01 - kaliningrad": "Europe/Kaliningrad",
  "msk+00 - moscow area": "Europe/Moscow",
  "msk+00 - crimea": "Europe/Simferopol",
  "msk+00 - volgograd": "Europe/Volgograd",
  "msk+00 - kirov": "Europe/Kirov",
  "msk+01 - astrakhan": "Europe/Astrakhan",
  "msk+01 - saratov": "Europe/Saratov",
  "msk+01 - ulyanovsk": "Europe/Ulyanovsk",
  "msk+01 - samaraudmurtia": "Europe/Samara",
  "msk+02 - urals": "Asia/Yekaterinburg",
  "msk+03 - omsk": "Asia/Omsk",
  "msk+04 - novosibirsk": "Asia/Novosibirsk",
  "msk+04 - altai": "Asia/Barnaul",
  "msk+04 - tomsk": "Asia/Tomsk",
  "msk+04 - kemerovo": "Asia/Novokuznetsk",
  "msk+04 - krasnoyarsk area": "Asia/Krasnoyarsk",
  "msk+05 - irkutskburyatia": "Asia/Irkutsk",
  "msk+06 - zabaykalsky": "Asia/Chita",
  "msk+06 - lena river": "Asia/Yakutsk",
  "msk+06 - tomponskyust-maysky": "Asia/Khandyga",
  "msk+07 - amur river": "Asia/Vladivostok",
  "msk+07 - oymyakonsky": "Asia/Ust-Nera",
  "msk+08 - magadan": "Asia/Magadan",
  "msk+08 - sakhalin island": "Asia/Sakhalin",
  "msk+08 - sakha (e) north kuril is": "Asia/Srednekolymsk",
  "msk+09 - kamchatka": "Asia/Kamchatka",
  "msk+09 - bering sea": "Asia/Anadyr",
  "antarctica/south_pole": "Pacific/Auckland",
  "america/buenos_aires": "America/Argentina/Buenos_Aires",
  "america/coral_harbour": "America/Atikokan",
  "america/fort_wayne": "America/Indiana/Indianapolis",
  "america/knox_in": "America/Indiana/Knox",
  "america/porto_acre": "America/Rio_Branco",
  "america/santa_isabel": "America/Tijuana",
  "asia/tel_aviv": "Asia/Jerusalem",
  "asia/ujung_pandang": "Asia/Makassar",
  "asia/ulan_bator": "Asia/Ulaanbaatar",
  "atlantic/jan_mayen": "Europe/Oslo"
};
const Zi = /(\-?[0-9]+)h(rs)?/i, Qi = /(\-?[0-9]+)/, Xi = /utc([\-+]?[0-9]+)/i, at = /gmt([\-+]?[0-9]+)/i, ta = function(a) {
  return a = Number(a), a > -13 && a < 13 ? (a = a * -1, a = (a > 0 ? "+" : "") + a, "Etc/GMT" + a) : null;
}, et = function(a) {
  let e = a.match(Zi);
  if (e !== null || (e = a.match(Xi), e !== null))
    return ta(e[1]);
  if (e = a.match(at), e !== null) {
    let n = Number(e[1]) * -1;
    return ta(n);
  }
  return e = a.match(Qi), e !== null ? ta(e[1]) : null;
};
let c = Vi(Yi);
c = Object.assign(c, Ji);
Object.keys(c).filter((a) => {
  let e = c[a];
  typeof e == "string" && (e = e.toLowerCase(), c[e] === void 0 && (c[e] = c[a]));
});
const nt = (a) => (a = a.replace(/^in /g, ""), a = a.replace(/ time/g, ""), a = a.replace(/ (standard|daylight|summer)/g, ""), a = a.replace(/ - .*/g, ""), a = a.replace(/, .*/g, ""), a.trim()), it = function(a) {
  return a = a.replace(/\b(east|west|north|south)ern/g, "$1"), a = a.replace(/\b(africa|america|australia)n/g, "$1"), a = a.replace(/\beuropean/g, "europe"), a = a.replace(/\islands/g, "island"), a = a.replace(/.*\//g, ""), a.trim();
}, tt = function(a) {
  return a = a.replace(/\(.*\)/, ""), a.trim();
}, rt = function(a) {
  if (!a)
    return null;
  if (a = a.toLowerCase().trim(), c.hasOwnProperty(a))
    return c[a];
  if (/[0-9]/.test(a)) {
    let n = et(a);
    if (n)
      return [n];
  }
  if (a = nt(a), c.hasOwnProperty(a))
    return c[a];
  let e = a + " time";
  return c.hasOwnProperty(e) || (e = a + " standard time", c.hasOwnProperty(e)) ? c[e] : (a = it(a), c.hasOwnProperty(a) || (a = tt(a), c.hasOwnProperty(a)) ? c[a] : (e = a + " time", c.hasOwnProperty(e) || (e = a + " standard time", c.hasOwnProperty(e)) ? c[e] : null));
};
var st = [
  {
    name: "India Time",
    abbr: null,
    aliases: [
      "india",
      "indian",
      "india standard time",
      "chennai",
      "kolkata",
      "mumbai",
      "new delhi"
    ],
    ids: ["Asia/Kolkata", "Asia/Calcutta", "Asia/Colombo"],
    std: {
      name: "India Standard Time",
      abbr: "IST",
      offset: 5.5
    },
    dst: {},
    long: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    hem: "n"
  },
  {
    name: "China Time",
    abbr: null,
    aliases: ["china", "china standard time", "beijing", "chongqing", "hong kong", "urumqi"],
    ids: ["Asia/Shanghai", "Asia/Macau", "Asia/Urumqi"],
    std: {
      abbr: "CST",
      name: "China Standard Time",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    hem: "n"
  },
  {
    name: "Central European Time",
    abbr: null,
    aliases: [
      "europe central",
      "romance standard time",
      "brussels",
      "copenhagen",
      "madrid",
      "paris",
      "romance"
    ],
    ids: [
      "Europe/Paris",
      "Africa/Ceuta",
      "Arctic/Longyearbyen",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Belgrade",
      "Europe/Berlin",
      "Europe/Bratislava",
      "Europe/Brussels",
      "Europe/Budapest",
      "Europe/Busingen",
      "Europe/Copenhagen",
      "Europe/Gibraltar",
      "Europe/Ljubljana",
      "Europe/Luxembourg",
      "Europe/Madrid",
      "Europe/Malta",
      "Europe/Monaco",
      "Europe/Oslo",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Rome",
      "Europe/San_Marino",
      "Europe/Sarajevo",
      "Europe/Skopje",
      "Europe/Stockholm",
      "Europe/Tirane",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Warsaw",
      "Europe/Zagreb",
      "Europe/Zurich"
    ],
    std: {
      abbr: "CET",
      name: "Central European Standard Time",
      offset: 1
    },
    dst: {
      abbr: "CEST",
      name: "Central European Summer Time",
      offset: 2
    },
    long: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    ids: [
      "America/Puerto_Rico",
      "America/Montserrat",
      "America/Port_of_Spain",
      "America/Santo_Domingo",
      "America/St_Barthelemy",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Tortola",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Kralendijk",
      "America/Lower_Princes",
      "America/Marigot",
      "America/Martinique",
      "America/Anguilla",
      "America/Antigua",
      "America/Aruba",
      "America/Barbados",
      "America/Blanc-Sablon",
      "America/Curacao",
      "America/Dominica"
    ],
    std: {
      name: "Atlantic Standard Time",
      abbr: "AST",
      offset: -4
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Greenwich Mean Time",
    abbr: null,
    aliases: ["gmt", "zulu", "utc", "coordinated universal time"],
    ids: [
      "Etc/GMT",
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Bamako",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Freetown",
      "Africa/Lome",
      "Africa/Monrovia",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Sao_Tome",
      "America/Danmarkshavn",
      "Atlantic/Reykjavik",
      "Atlantic/St_Helena",
      "Etc/UTC"
    ],
    std: {
      name: "Greenwich Mean Time",
      abbr: "GMT",
      offset: 0
    },
    dst: {},
    long: "(UTC) Coordinated Universal Time",
    hem: "n"
  },
  {
    name: "Eastern European Time",
    abbr: null,
    aliases: ["europe eastern"],
    ids: [
      "Asia/Beirut",
      "Asia/Famagusta",
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau",
      "Europe/Helsinki",
      "Europe/Kiev",
      "Europe/Mariehamn",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye"
    ],
    std: {
      abbr: "EET",
      name: "Eastern European Standard Time",
      offset: 2
    },
    dst: {
      abbr: "EEST",
      name: "Eastern European Summer Time",
      offset: 3
    },
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    ids: [
      "America/Indiana",
      "America/North_Dakota",
      "America/Belize",
      "America/Costa_Rica",
      "America/El_Salvador",
      "America/Guatemala",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Managua",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Regina",
      "America/Swift_Current",
      "America/Tegucigalpa"
    ],
    std: {
      name: "Central Standard Time",
      abbr: "CST",
      offset: -6
    },
    hem: "n"
  },
  {
    name: "Eastern Time",
    abbr: "ET",
    aliases: ["america eastern", "eastern standard time", "eastern"],
    ids: [
      "America/New_York",
      "America/Detroit",
      "America/Grand_Turk",
      "America/Indianapolis",
      "America/Iqaluit",
      "America/Louisville",
      "America/Nassau",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto",
      "America/Montreal",
      "America/Kentucky"
    ],
    std: {
      name: "Eastern Standard Time",
      abbr: "EST",
      offset: -5
    },
    dst: {
      name: "Eastern Daylight Time",
      abbr: "EDT",
      offset: -4
    },
    long: "(UTC-05:00) Eastern Time (US & Canada)",
    hem: "n"
  },
  {
    name: "Argentina Time",
    abbr: "ART",
    aliases: ["argentina", "arst", "argentina standard time", "buenos aires"],
    ids: [
      "America/Buenos_Aires",
      "America/Argentina/La_Rioja",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Catamarca",
      "America/Cordoba",
      "America/Jujuy",
      "America/Mendoza",
      "Antarctica/Rothera",
      "America/Argentina"
    ],
    std: {
      name: "Argentina Standard Time",
      abbr: "ART",
      offset: -3
    },
    dst: {},
    long: "(UTC-03:00) City of Buenos Aires",
    hem: "s"
  },
  {
    name: "",
    dupe: !0,
    ids: [
      "America/Coral_Harbour",
      "America/Indiana/Marengo",
      "America/Indiana/Petersburg",
      "America/Indiana/Vevay",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Kentucky/Monticello",
      "America/Cancun",
      "America/Cayman",
      "America/Jamaica",
      "America/Panama"
    ],
    std: {
      name: "Eastern Standard Time",
      abbr: "EST",
      offset: -5
    },
    hem: "n"
  },
  {
    name: "East Africa Time",
    abbr: null,
    aliases: [
      "africa eastern",
      "e. africa standard time",
      "nairobi",
      "east africa",
      "eastern africa"
    ],
    ids: [
      "Africa/Nairobi",
      "Africa/Addis_Ababa",
      "Africa/Asmera",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Kampala",
      "Africa/Mogadishu",
      "Indian/Comoro",
      "Indian/Mayotte"
    ],
    std: {
      name: "East Africa Time",
      abbr: "EAT",
      offset: 3
    },
    dst: {},
    long: "(UTC+03:00) Nairobi",
    hem: "n"
  },
  {
    name: "West Africa Time",
    abbr: "WAT",
    aliases: [
      "africa western",
      "wast",
      "western africa",
      "w. central africa standard time",
      "west central africa",
      "w. central africa"
    ],
    ids: [
      "Africa/Lagos",
      "Africa/Bangui",
      "Africa/Douala",
      "Africa/Libreville",
      "Africa/Malabo",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Porto-Novo"
    ],
    std: {
      name: "West Africa Standard Time",
      abbr: "WAT",
      offset: 1
    },
    long: "(UTC+01:00) West Central Africa",
    hem: "n"
  },
  {
    name: "Moscow Time",
    abbr: null,
    aliases: ["moscow", "russian standard time", "st. petersburg", "russian", "volgograd time"],
    ids: [
      "Europe/Moscow",
      "Europe/Astrakhan",
      "Europe/Minsk",
      "Europe/Simferopol",
      "Europe/Ulyanovsk",
      "Europe/Kirov",
      "Europe/Volgograd",
      "Asia/Volgograd"
    ],
    std: {
      abbr: "MSK",
      name: "Moscow Standard Time",
      offset: 3
    },
    dst: {},
    long: "(UTC+03:00) Moscow, St. Petersburg",
    hem: "n"
  },
  {
    name: "Brasilia Time",
    abbr: null,
    aliases: ["brasilia", "e. south america standard time", "east south america"],
    ids: [
      "America/Sao_Paulo",
      "America/Araguaina",
      "America/Bahia",
      "America/Belem",
      "America/Fortaleza",
      "America/Maceio",
      "America/Recife",
      "America/Santarem"
    ],
    std: {
      abbr: "BRT",
      name: "Brasilia Standard Time",
      offset: -3
    },
    dst: {},
    long: "(UTC-03:00) Brasilia",
    hem: "s"
  },
  {
    name: "Mountain Time",
    abbr: "MT",
    aliases: ["america mountain", "mountain standard time", "mountain"],
    ids: [
      "America/Boise",
      "America/Cambridge_Bay",
      "America/Denver",
      "America/Edmonton",
      "America/Inuvik",
      "America/Ojinaga",
      "America/Yellowknife"
    ],
    std: {
      name: "Mountain Standard Time",
      abbr: "MST",
      offset: -7
    },
    dst: {
      name: "Mountain Daylight Time",
      abbr: "MDT",
      offset: -6
    },
    long: "(UTC-07:00) Mountain Time (US & Canada)",
    hem: "n"
  },
  {
    name: "Central Time",
    abbr: "CT",
    aliases: ["america central", "central standard time", "central"],
    ids: [
      "America/Chicago",
      "America/Matamoros",
      "America/Menominee",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Resolute",
      "America/Winnipeg"
    ],
    std: {
      name: "Central Standard Time",
      abbr: "CST",
      offset: -6
    },
    dst: {
      name: "Central Daylight Time",
      abbr: "CDT",
      offset: -5
    },
    long: "(UTC-06:00) Central Time (US & Canada)",
    hem: "n"
  },
  {
    name: "Central Africa Time",
    abbr: null,
    aliases: ["africa central", "namibia standard time", "windhoek", "namibia"],
    ids: [
      "Africa/Windhoek",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Maputo"
    ],
    std: {
      name: "Central Africa Time",
      abbr: "CAT",
      offset: 2
    },
    dst: {},
    long: "(UTC+02:00) Windhoek",
    hem: "s"
  },
  {
    name: "Arabian Time",
    abbr: null,
    aliases: ["arabian", "arab standard time", "kuwait", "riyadh", "arab", "arabia", "arabic"],
    ids: ["Asia/Baghdad", "Asia/Aden", "Asia/Bahrain", "Asia/Kuwait", "Asia/Qatar", "Asia/Riyadh"],
    std: {
      abbr: "AST",
      name: "Arabian Standard Time",
      offset: 3
    },
    dst: {},
    long: "(UTC+03:00) Kuwait, Riyadh",
    hem: "n"
  },
  {
    name: "Alaska Time",
    abbr: "AKT",
    aliases: ["alaska", "alaskan standard time", "alaskan"],
    ids: [
      "America/Anchorage",
      "America/Juneau",
      "America/Metlakatla",
      "America/Nome",
      "America/Sitka",
      "America/Yakutat"
    ],
    std: {
      name: "Alaska Standard Time",
      abbr: "AKST",
      offset: -9
    },
    dst: {
      name: "Alaska Daylight Time",
      abbr: "AKDT",
      offset: -8
    },
    long: "(UTC-09:00) Alaska",
    hem: "n"
  },
  {
    name: "Atlantic Time",
    abbr: "AT",
    aliases: ["atlantic", "atlantic standard time"],
    ids: [
      "America/Halifax",
      "America/Glace_Bay",
      "America/Goose_Bay",
      "America/Moncton",
      "America/Thule",
      "Atlantic/Bermuda"
    ],
    std: {
      name: "Atlantic Standard Time",
      abbr: "AST",
      offset: -4
    },
    dst: {
      name: "Atlantic Daylight Time",
      abbr: "ADT",
      offset: -3
    },
    long: "(UTC-04:00) Atlantic Time (Canada)",
    hem: "n"
  },
  {
    name: "British Time",
    abbr: null,
    aliases: ["gmt", "gmt standard time", "dublin", "edinburgh", "lisbon", "london"],
    ids: [
      "Europe/London",
      "Europe/Dublin",
      "Europe/Guernsey",
      "Europe/Isle_of_Man",
      "Europe/Jersey"
    ],
    std: {
      name: "Greenwich Mean Time",
      abbr: "GMT",
      offset: 0
    },
    dst: {
      name: "British Summer Time",
      abbr: "BST",
      offset: 1
    },
    long: "(UTC+00:00) Dublin, Edinburgh, Lisbon, London",
    hem: "n"
  },
  {
    name: "Central Africa Time",
    dupe: !0,
    ids: ["Africa/Blantyre", "Africa/Bujumbura", "Africa/Juba", "Africa/Khartoum", "Africa/Kigali"],
    std: {
      name: "Central Africa Time",
      abbr: "CAT",
      offset: 2
    },
    dst: {},
    hem: "n"
  },
  {
    name: "West Kazakhstan Time",
    abbr: null,
    aliases: [
      "kazakhstan western",
      "west asia standard time",
      "ashgabat",
      "tashkent",
      "west asia",
      "alma ata"
    ],
    ids: ["Asia/Aqtau", "Asia/Aqtobe", "Asia/Atyrau", "Asia/Oral", "Asia/Qyzylorda"],
    std: {
      abbr: "ALMT",
      name: "Alma-Ata Time",
      offset: 5
    },
    dst: {},
    long: "(UTC+05:00) Ashgabat, Tashkent",
    hem: "n"
  },
  {
    name: "Eastern Australia Time",
    abbr: "AET",
    aliases: [
      "australia eastern",
      "aus eastern standard time",
      "canberra",
      "melbourne",
      "sydney",
      "aus eastern",
      "aus east"
    ],
    ids: [
      "Australia/Sydney",
      "Antarctica/Macquarie",
      "Australia/Currie",
      "Australia/Hobart",
      "Australia/Melbourne"
    ],
    std: {
      name: "Australian Eastern Standard Time",
      abbr: "AEST",
      offset: 10
    },
    dst: {
      name: "Australian Eastern Daylight Time",
      abbr: "AEDT",
      offset: 11
    },
    long: "(UTC+10:00) Canberra, Melbourne, Sydney",
    hem: "s"
  },
  {
    name: "Western European Time",
    abbr: null,
    aliases: ["europe western"],
    ids: ["Europe/Lisbon", "Atlantic/Canary", "Atlantic/Faeroe", "Atlantic/Madeira"],
    std: {
      abbr: "WET",
      name: "Western European Standard Time",
      offset: 0
    },
    dst: {
      abbr: "WEST",
      name: "Western European Summer Time",
      offset: 1
    },
    hem: "n"
  },
  {
    name: "Indochina Time",
    abbr: null,
    aliases: [
      "indochina",
      "se asia standard time",
      "bangkok",
      "hanoi",
      "jakarta",
      "se asia",
      "south east asia"
    ],
    ids: ["Asia/Bangkok", "Asia/Phnom_Penh", "Asia/Saigon", "Asia/Vientiane"],
    std: {
      abbr: "ICT",
      name: "Indochina Time",
      offset: 7
    },
    dst: {},
    long: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    abbr: "MT",
    std: {
      name: "Mountain Standard Time",
      abbr: "MST",
      offset: -7
    },
    ids: ["America/Phoenix", "America/Creston", "America/Dawson_Creek", "America/Fort_Nelson"],
    hem: "n"
  },
  {
    name: "Central Mexico Time",
    long: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    aliases: ["guadalajara", "mexico city", "monterrey", "central mexico", "central mexican"],
    ids: ["America/Mexico_City", "America/Merida", "America/Monterrey", "America/Bahia_Banderas"],
    std: {
      name: "Central Standard Time",
      abbr: "CST",
      offset: -6
    },
    dst: {
      name: "Central Daylight Time",
      abbr: "CDT",
      offset: -5
    },
    hem: "n"
  },
  {
    name: "West Africa Time",
    dupe: !0,
    ids: ["Africa/Luanda", "Africa/Kinshasa", "Africa/Brazzaville"],
    std: {
      name: "West Africa Standard Time",
      abbr: "WAT",
      offset: 1
    },
    hem: "s"
  },
  {
    name: "",
    dupe: !0,
    ids: ["Africa/Cairo", "Africa/Tripoli", "Europe/Kaliningrad"],
    std: {
      abbr: "EET",
      name: "Eastern European Standard Time",
      offset: 2
    },
    hem: "n"
  },
  {
    name: "South Africa Time",
    abbr: null,
    aliases: [
      "africa southern",
      "south africa standard time",
      "harare",
      "pretoria",
      "south africa"
    ],
    ids: ["Africa/Johannesburg", "Africa/Maseru", "Africa/Mbabane"],
    std: {
      name: "South Africa Standard Time",
      abbr: "SAST",
      offset: 2
    },
    dst: {},
    long: "(UTC+02:00) Harare, Pretoria",
    hem: "s"
  },
  {
    name: "Krasnoyarsk Time",
    abbr: null,
    aliases: ["krasnoyarsk", "north asia standard time", "north asia"],
    ids: ["Asia/Krasnoyarsk", "Asia/Novokuznetsk", "Asia/Barnaul"],
    std: {
      abbr: "KRAT",
      name: "Krasnoyarsk Standard Time",
      offset: 7
    },
    dst: {},
    long: "(UTC+07:00) Krasnoyarsk",
    hem: "n"
  },
  {
    name: "Yakutsk Time",
    abbr: null,
    aliases: ["yakutsk", "yakutsk standard time"],
    ids: ["Asia/Yakutsk", "Asia/Chita", "Asia/Khandyga"],
    std: {
      abbr: "YAKT",
      name: "Yakutsk Standard Time",
      offset: 9
    },
    dst: {},
    long: "(UTC+09:00) Yakutsk",
    hem: "n"
  },
  {
    name: "Pacific Time",
    abbr: "PT",
    aliases: ["america pacific", "pacific standard time", "pacific"],
    ids: ["America/Los_Angeles", "America/Tijuana", "America/Vancouver"],
    std: {
      name: "Pacific Standard Time",
      abbr: "PST",
      offset: -8
    },
    dst: {
      name: "Pacific Daylight Time",
      abbr: "PDT",
      offset: -7
    },
    long: "(UTC-08:00) Pacific Time (US & Canada)",
    hem: "n"
  },
  {
    name: "Amazon Time",
    abbr: null,
    aliases: [
      "amazon",
      "central brazilian standard time",
      "cuiaba",
      "central brazilian",
      "central brazil"
    ],
    ids: ["America/Boa_Vista", "America/Manaus", "America/Porto_Velho"],
    std: {
      abbr: "AMT",
      name: "Amazon Standard Time",
      offset: -4
    },
    dst: {},
    long: "(UTC-04:00) Cuiaba",
    hem: "n"
  },
  {
    name: "Morocco Standard Time",
    offset: 1,
    long: "(UTC+00:00) Casablanca",
    aliases: ["casablanca", "morocco"],
    ids: ["Africa/Casablanca", "Africa/El_Aaiun"],
    std: {
      abbr: "WET",
      name: "Western European Standard Time",
      offset: 1
    },
    dst: {
      abbr: "WEST",
      name: "Western European Summer Time",
      offset: 0
    },
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    ids: ["Africa/Algiers", "Africa/Tunis"],
    std: {
      abbr: "CET",
      name: "Central European Standard Time",
      offset: 1
    },
    dst: {
      abbr: "CEST",
      name: "Central European Summer Time",
      offset: 2
    },
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    ids: ["Asia/Gaza", "Asia/Hebron"],
    std: {
      abbr: "EET",
      name: "Eastern European Standard Time",
      offset: 2
    },
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    ids: ["Asia/Damascus", "Asia/Amman"],
    std: {
      abbr: "EET",
      name: "Eastern European Standard Time",
      offset: 2
    },
    hem: "n"
  },
  {
    name: "Gulf Time",
    abbr: null,
    aliases: ["gulf", "arabian standard time", "abu dhabi", "muscat", "arabian"],
    ids: ["Asia/Dubai", "Asia/Muscat"],
    std: {
      name: "Gulf Standard Time",
      abbr: "GST",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Abu Dhabi, Muscat",
    hem: "n"
  },
  {
    name: "Samara Time",
    abbr: null,
    aliases: ["samara", "russia time zone 3", "izhevsk"],
    ids: ["Europe/Samara", "Europe/Saratov"],
    std: {
      abbr: "SAMT",
      name: "Samara Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Izhevsk, Samara",
    hem: "n"
  },
  {
    name: "Uzbekistan Time",
    abbr: null,
    aliases: ["uzbekistan"],
    ids: ["Asia/Samarkand", "Asia/Tashkent"],
    std: {
      abbr: "UZT",
      name: "Uzbekistan Standard Time",
      offset: 5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "East Kazakhstan Time",
    abbr: null,
    aliases: ["kazakhstan eastern", "central asia standard time", "astana", "central asia"],
    ids: ["Asia/Almaty", "Asia/Qostanay"],
    std: {
      abbr: "ALMT",
      name: "East Kazakhstan Time",
      offset: 6
    },
    dst: {},
    long: "(UTC+06:00) Astana",
    hem: "n"
  },
  {
    name: "Omsk Time",
    abbr: null,
    aliases: ["omsk", "omsk standard time"],
    ids: ["Asia/Omsk", "Asia/Tomsk"],
    std: {
      abbr: "OMST",
      name: "Omsk Standard Time",
      offset: 6
    },
    dst: {},
    long: "(UTC+06:00) Omsk",
    hem: "n"
  },
  {
    name: "Western Indonesia Time",
    abbr: null,
    aliases: ["indonesia western"],
    ids: ["Asia/Jakarta", "Asia/Pontianak"],
    std: {
      name: "Western Indonesia Time",
      abbr: "WIB",
      offset: 7
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Ulaanbaatar Time",
    abbr: null,
    aliases: ["mongolia", "ulaanbaatar standard time", "ulaanbaatar"],
    ids: ["Asia/Ulaanbaatar", "Asia/Choibalsan"],
    std: {
      abbr: "ULAT",
      name: "Ulaanbaatar Standard Time",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Ulaanbaatar",
    hem: "n"
  },
  {
    name: "Malaysia Time",
    abbr: null,
    aliases: ["malaysia"],
    ids: ["Asia/Kuala_Lumpur", "Asia/Kuching"],
    std: {
      name: "Malaysia Time",
      abbr: "MYT",
      offset: 8
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Korean Time",
    abbr: null,
    aliases: ["korea", "korea standard time", "seoul"],
    ids: ["Asia/Seoul", "Asia/Pyongyang"],
    std: {
      abbr: "KST",
      name: "Korean Standard Time",
      offset: 9
    },
    dst: {},
    long: "(UTC+09:00) Seoul",
    hem: "n"
  },
  {
    name: "Central Australia Time",
    abbr: "ACT",
    aliases: ["australia central", "cen. australia standard time", "adelaide", "central australia"],
    ids: ["Australia/Adelaide", "Australia/Broken_Hill"],
    std: {
      name: "Australian Central Standard Time",
      abbr: "ACST",
      offset: 9.5
    },
    dst: {
      name: "Australian Central Daylight Time",
      abbr: "ACDT",
      offset: 10.5
    },
    long: "(UTC+09:30) Adelaide",
    hem: "s"
  },
  {
    name: "Brisbane Time",
    dupe: !0,
    ids: ["Australia/Brisbane", "Australia/Lindeman"],
    std: {
      name: "Australian Eastern Standard Time",
      abbr: "AEST",
      offset: 10
    },
    hem: "s"
  },
  {
    name: "Vladivostok Time",
    abbr: null,
    aliases: ["vladivostok", "vladivostok standard time"],
    ids: ["Asia/Vladivostok", "Asia/Ust-Nera"],
    std: {
      abbr: "VLAT",
      name: "Vladivostok Standard Time",
      offset: 10
    },
    dst: {},
    long: "(UTC+10:00) Vladivostok",
    hem: "n"
  },
  {
    name: "Chamorro Time",
    abbr: null,
    aliases: [
      "chamorro",
      "west pacific standard time",
      "guam",
      "port moresby",
      "west pacific",
      "western pacific"
    ],
    ids: ["Pacific/Guam", "Pacific/Saipan"],
    std: {
      name: "Chamorro Standard Time",
      abbr: "ChST",
      offset: 10
    },
    dst: {},
    long: "(UTC+10:00) Guam, Port Moresby",
    hem: "n"
  },
  {
    name: "Papua New Guinea Time",
    abbr: null,
    aliases: ["papua new guinea", "guinea", "guinean"],
    ids: ["Pacific/Bougainville", "Pacific/Port_Moresby"],
    std: {
      abbr: "PGT",
      name: "Papua New Guinea Time",
      offset: 11
    },
    dst: {},
    hem: "s"
  },
  {
    name: "New Zealand Time",
    abbr: "NZT",
    aliases: ["new zealand", "new zealand standard time", "auckland", "wellington"],
    ids: ["Pacific/Auckland", "Antarctica/McMurdo"],
    std: {
      name: "New Zealand Standard Time",
      abbr: "NZST",
      offset: 12
    },
    dst: {
      name: "New Zealand Daylight Time",
      abbr: "NZDT",
      offset: 13
    },
    long: "(UTC+12:00) Auckland, Wellington",
    hem: "s"
  },
  {
    name: "Marshall Islands Time",
    abbr: null,
    aliases: ["marshall islands"],
    ids: ["Pacific/Kwajalein", "Pacific/Majuro"],
    std: {
      abbr: "MHT",
      name: "Marshall Islands Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Samoa Time",
    abbr: "SST",
    aliases: ["samoa", "samoa standard time"],
    ids: ["Pacific/Midway", "Pacific/Pago_Pago"],
    std: {
      abbr: "SST",
      name: "Samoa Standard Time",
      offset: -11
    },
    dst: {},
    long: "(UTC+13:00) Samoa",
    hem: "n"
  },
  {
    name: "Hawaii-Aleutian Time",
    abbr: "HAT",
    aliases: ["hawaii aleutian", "aleutian standard time", "aleutian"],
    ids: ["Pacific/Honolulu", "Pacific/Johnston"],
    std: {
      name: "Hawaii-Aleutian Standard Time",
      abbr: "HAST",
      offset: -9
    },
    dst: {
      name: "Hawaii-Aleutian Daylight Time",
      abbr: "HADT",
      offset: -8
    },
    long: "(UTC-09:00) Aleutian Islands",
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    std: {
      name: "Mountain Standard Time",
      abbr: "MST",
      offset: -7
    },
    ids: ["America/Dawson", "America/Whitehorse"],
    hem: "n"
  },
  {
    name: "Mexican Pacific Time",
    abbr: "HPMX",
    aliases: [
      "mexico pacific",
      "mountain standard time (mexico)",
      "chihuahua",
      "la paz",
      "mazatlan",
      "mountain mexico"
    ],
    ids: ["America/Chihuahua", "America/Mazatlan"],
    std: {
      name: "Mexican Pacific Standard Time",
      abbr: "HNPMX",
      offset: -7
    },
    dst: {
      name: "Mexican Pacific Daylight Time",
      abbr: "HEPMX",
      offset: -6
    },
    long: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
    hem: "n"
  },
  {
    name: "Colombia Time",
    abbr: "COT",
    aliases: ["colombia", "cost"],
    ids: ["America/Bogota", "Pacific/Galapagos"],
    std: {
      name: "Colombia Standard Time",
      abbr: "COT",
      offset: -5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Acre Time",
    abbr: null,
    aliases: ["acre"],
    ids: ["America/Eirunepe", "America/Rio_Branco"],
    std: {
      abbr: "ACT",
      name: "Acre Standard Time",
      offset: -5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    ids: ["America/Campo_Grande", "America/Cuiaba"],
    std: {
      abbr: "AMT",
      name: "Amazon Standard Time",
      offset: -4
    },
    hem: "s"
  },
  {
    name: "",
    dupe: !0,
    ids: ["Antarctica/Palmer", "America/Punta_Arenas"],
    std: {
      name: "Chile Standard Time",
      abbr: "CLT",
      offset: -3
    },
    hem: "s"
  },
  {
    name: "Troll Time",
    dupe: !0,
    abbr: null,
    aliases: ["troll research station"],
    ids: ["Antarctica/Troll"],
    std: {
      name: "Greenwich Mean Time",
      abbr: "GMT",
      offset: 0
    },
    dst: {},
    hem: "s"
  },
  {
    name: "East Greenland Time",
    abbr: "HEG",
    aliases: ["greenland eastern"],
    ids: ["America/Scoresbysund"],
    std: {
      name: "East Greenland Standard Time",
      abbr: "HNEG",
      offset: 0
    },
    dst: {
      name: "East Greenland Summer Time",
      abbr: "HEEG",
      offset: 1
    },
    hem: "n"
  },
  {
    name: "Israel Time",
    abbr: null,
    aliases: ["israel", "israel standard time", "jerusalem"],
    ids: ["Asia/Jerusalem"],
    std: {
      abbr: "IST",
      name: "Israel Standard Time",
      offset: 2
    },
    dst: {
      name: "Israel Daylight Time",
      offset: 3
    },
    long: "(UTC+02:00) Jerusalem",
    hem: "n"
  },
  {
    name: "East Africa Time",
    dupe: !0,
    ids: ["Indian/Antananarivo"],
    std: {
      name: "East Africa Time",
      abbr: "EAT",
      offset: 3
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Syowa Time",
    abbr: null,
    aliases: ["syowa"],
    ids: ["Antarctica/Syowa"],
    std: {
      abbr: "SYOT",
      name: "Syowa Time",
      offset: 3
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Turkey Time",
    abbr: "TRT",
    aliases: ["turkey", "turkey standard time", "istanbul"],
    ids: ["Europe/Istanbul"],
    std: {
      name: "Turkey Time",
      abbr: "TRT",
      offset: 3
    },
    dst: {},
    long: "(UTC+03:00) Istanbul",
    hem: "n"
  },
  {
    name: "Iran Time",
    abbr: null,
    aliases: ["iran", "iran standard time", "tehran"],
    ids: ["Asia/Tehran"],
    std: {
      abbr: "IRST",
      name: "Iran Standard Time",
      offset: 3.5
    },
    dst: {
      abbr: "IRDT",
      name: "Iran Daylight Time",
      offset: 4.5
    },
    long: "(UTC+03:30) Tehran",
    hem: "n"
  },
  {
    name: "Azerbaijan Time",
    abbr: null,
    aliases: ["azerbaijan", "azerbaijan standard time", "baku"],
    ids: ["Asia/Baku"],
    std: {
      abbr: "AZT",
      name: "Azerbaijan Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Baku",
    hem: "n"
  },
  {
    name: "Georgia Time",
    abbr: "GET",
    aliases: ["georgia", "georgian standard time", "tbilisi", "georgian"],
    ids: ["Asia/Tbilisi"],
    std: {
      abbr: "GET",
      name: "Georgia Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Tbilisi",
    hem: "n"
  },
  {
    name: "Armenia Time",
    abbr: "AMT",
    aliases: ["armenia", "caucasus standard time", "yerevan", "caucasus"],
    ids: ["Asia/Yerevan"],
    std: {
      abbr: "AMT",
      name: "Armenia Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Yerevan",
    hem: "n"
  },
  {
    name: "Seychelles Time",
    abbr: null,
    aliases: ["seychelles"],
    ids: ["Indian/Mahe"],
    std: {
      abbr: "SCT",
      name: "Seychelles Time",
      offset: 4
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Mauritius Time",
    abbr: null,
    aliases: ["mauritius", "mauritius standard time", "port louis"],
    ids: ["Indian/Mauritius"],
    std: {
      abbr: "MUT",
      name: "Mauritius Standard Time",
      offset: 4
    },
    dst: {},
    long: "(UTC+04:00) Port Louis",
    hem: "n"
  },
  {
    name: "R\xE9union Time",
    abbr: null,
    aliases: ["reunion"],
    ids: ["Indian/Reunion"],
    std: {
      abbr: "RET",
      name: "R\xE9union Time",
      offset: 4
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Afghanistan Time",
    abbr: null,
    aliases: ["afghanistan", "afghanistan standard time", "kabul"],
    ids: ["Asia/Kabul"],
    std: {
      abbr: "AFT",
      name: "Afghanistan Time",
      offset: 4.5
    },
    dst: {},
    long: "(UTC+04:30) Kabul",
    hem: "n"
  },
  {
    name: "Mawson Time",
    abbr: null,
    aliases: ["mawson"],
    ids: ["Antarctica/Mawson"],
    std: {
      abbr: "MAWT",
      name: "Mawson Time",
      offset: 5
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Turkmenistan Time",
    abbr: "TMT",
    aliases: ["turkmenistan", "tmst"],
    ids: ["Asia/Ashgabat"],
    std: {
      name: "Turkmenistan Standard Time",
      abbr: "TMT",
      offset: 5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Tajikistan Time",
    abbr: null,
    aliases: ["tajikistan"],
    ids: ["Asia/Dushanbe"],
    std: {
      abbr: "TJT",
      name: "Tajikistan Time",
      offset: 5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Pakistan Time",
    abbr: null,
    aliases: ["pakistan", "pakistan standard time", "islamabad", "karachi"],
    ids: ["Asia/Karachi"],
    std: {
      abbr: "PKT",
      name: "Pakistan Standard Time",
      offset: 5
    },
    dst: {},
    long: "(UTC+05:00) Islamabad, Karachi",
    hem: "n"
  },
  {
    name: "Yekaterinburg Time",
    abbr: "YEKT",
    aliases: ["yekaterinburg", "ekaterinburg standard time", "ekaterinburg"],
    ids: ["Asia/Yekaterinburg"],
    std: {
      abbr: "YEKT",
      name: "Yekaterinburg Standard Time",
      offset: 5
    },
    dst: {},
    long: "(UTC+05:00) Ekaterinburg",
    hem: "n"
  },
  {
    name: "French Southern & Antarctic Time",
    abbr: null,
    aliases: ["french southern"],
    ids: ["Indian/Kerguelen"],
    std: {
      abbr: "TFT",
      name: "French Southern & Antarctic Time",
      offset: 5
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Maldives Time",
    abbr: null,
    aliases: ["maldives"],
    ids: ["Indian/Maldives"],
    std: {
      abbr: "MVT",
      name: "Maldives Time",
      offset: 5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Nepal Time",
    abbr: null,
    aliases: ["nepal", "nepal standard time", "kathmandu"],
    ids: ["Asia/Katmandu"],
    std: {
      abbr: "NPT",
      name: "Nepal Time",
      offset: 5.75
    },
    dst: {},
    long: "(UTC+05:45) Kathmandu",
    hem: "n"
  },
  {
    name: "Vostok Time",
    abbr: null,
    aliases: ["vostok"],
    ids: ["Antarctica/Vostok"],
    std: {
      abbr: "MSK+4",
      name: "Vostok Time",
      offset: 6
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Kyrgyzstan Time",
    abbr: null,
    aliases: ["kyrgystan"],
    ids: ["Asia/Bishkek"],
    std: {
      abbr: "KGT",
      name: "Kyrgyzstan Time",
      offset: 6
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Bangladesh Time",
    abbr: "BST",
    aliases: ["bangladesh", "bangladesh standard time", "dhaka"],
    ids: ["Asia/Dhaka"],
    std: {
      abbr: "BST",
      name: "Bangladesh Standard Time",
      offset: 6
    },
    dst: {},
    long: "(UTC+06:00) Dhaka",
    hem: "n"
  },
  {
    name: "Bhutan Time",
    abbr: null,
    aliases: ["bhutan"],
    ids: ["Asia/Thimphu"],
    std: {
      name: "Bhutan Time",
      abbr: "BT",
      offset: 6
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Indian Ocean Time",
    abbr: null,
    aliases: ["indian ocean", "indian chagos"],
    ids: ["Indian/Chagos"],
    std: {
      abbr: "IOT",
      name: "Indian Ocean Time",
      offset: 6
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Myanmar Time",
    abbr: null,
    aliases: ["myanmar", "myanmar standard time"],
    ids: ["Asia/Rangoon"],
    std: {
      abbr: "MMT",
      name: "Myanmar Time",
      offset: 6.5
    },
    dst: {},
    long: "(UTC+06:30) Yangon (Rangoon)",
    hem: "n"
  },
  {
    name: "Cocos Islands Time",
    abbr: null,
    aliases: ["cocos"],
    ids: ["Indian/Cocos"],
    std: {
      abbr: "CCT",
      name: "Cocos Islands Time",
      offset: 6.5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Davis Time",
    abbr: null,
    aliases: ["davis"],
    ids: ["Antarctica/Davis"],
    std: {
      abbr: "DAVT",
      name: "Davis Time",
      offset: 7
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Hovd Time",
    abbr: null,
    aliases: ["hovd", "w. mongolia standard time", "west mongolia", "western mongolia"],
    ids: ["Asia/Hovd"],
    std: {
      abbr: "HOVT",
      name: "Hovd Standard Time",
      offset: 7
    },
    dst: {},
    long: "(UTC+07:00) Hovd",
    hem: "n"
  },
  {
    name: "Novosibirsk Time",
    abbr: null,
    aliases: ["novosibirsk", "n. central asia standard time", "north central asia"],
    ids: ["Asia/Novosibirsk"],
    std: {
      abbr: "NOVT",
      name: "Novosibirsk Standard Time",
      offset: 7
    },
    dst: {},
    long: "(UTC+07:00) Novosibirsk",
    hem: "n"
  },
  {
    name: "Christmas Island Time",
    abbr: null,
    aliases: ["christmas"],
    ids: ["Indian/Christmas"],
    std: {
      abbr: "CXT",
      name: "Christmas Island Time",
      offset: 7
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Brunei Darussalam Time",
    abbr: null,
    aliases: ["brunei"],
    ids: ["Asia/Brunei"],
    std: {
      abbr: "BNT",
      name: "Brunei Darussalam Time",
      offset: 8
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Hong Kong Time",
    abbr: "HKT",
    aliases: ["hong kong", "hkst"],
    ids: ["Asia/Hong_Kong"],
    std: {
      name: "Hong Kong Standard Time",
      abbr: "HKT",
      offset: 8
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Irkutsk Time",
    abbr: null,
    aliases: ["irkutsk", "north asia east standard time", "north asia east"],
    ids: ["Asia/Irkutsk"],
    std: {
      abbr: "IRKT",
      name: "Irkutsk Standard Time",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Irkutsk",
    hem: "n"
  },
  {
    name: "Central Indonesia Time",
    abbr: null,
    aliases: ["indonesia central"],
    ids: ["Asia/Makassar"],
    std: {
      name: "Central Indonesia Time",
      abbr: "WITA",
      offset: 8
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Philippine Time",
    abbr: null,
    aliases: ["philippines"],
    ids: ["Asia/Manila"],
    std: {
      abbr: "PHST",
      name: "Philippine Standard Time",
      offset: 8
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Singapore Time",
    abbr: null,
    aliases: ["singapore", "singapore standard time", "kuala lumpur"],
    ids: ["Asia/Singapore"],
    std: {
      name: "Singapore Standard Time",
      abbr: "SGT",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Kuala Lumpur, Singapore",
    hem: "s"
  },
  {
    name: "Taipei Time",
    abbr: null,
    aliases: ["taipei", "taipei standard time"],
    ids: ["Asia/Taipei"],
    std: {
      abbr: "CST",
      name: "Taipei Standard Time",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Taipei",
    hem: "n"
  },
  {
    name: "Western Australia Time",
    abbr: "AWT",
    aliases: [
      "australia western",
      "awdt",
      "w. australia standard time",
      "perth",
      "western australia",
      "west australia"
    ],
    ids: ["Australia/Perth"],
    std: {
      name: "Australian Western Standard Time",
      abbr: "AWST",
      offset: 8
    },
    dst: {},
    long: "(UTC+08:00) Perth",
    hem: "s"
  },
  {
    name: "Australian Central Western Time",
    abbr: "ACWT",
    aliases: [
      "australia centralwestern",
      "acwdt",
      "aus central w. standard time",
      "eucla",
      "aus central west"
    ],
    ids: ["Australia/Eucla"],
    std: {
      name: "Australian Central Western Standard Time",
      abbr: "ACWST",
      offset: 8.75
    },
    dst: {},
    long: "(UTC+08:45) Eucla",
    hem: "s"
  },
  {
    name: "East Timor Time",
    abbr: "TLT",
    aliases: ["east timor"],
    ids: ["Asia/Dili"],
    std: {
      abbr: "TLT",
      name: "East Timor Time",
      offset: 9
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Eastern Indonesia Time",
    abbr: null,
    aliases: ["indonesia eastern"],
    ids: ["Asia/Jayapura"],
    std: {
      name: "Eastern Indonesia Time",
      abbr: "WIT",
      offset: 9
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Japan Time",
    abbr: null,
    aliases: ["japan", "jdt", "tokyo standard time", "osaka", "sapporo", "tokyo"],
    ids: ["Asia/Tokyo"],
    std: {
      name: "Japan Standard Time",
      abbr: "JST",
      offset: 9
    },
    dst: {},
    long: "(UTC+09:00) Osaka, Sapporo, Tokyo",
    hem: "n"
  },
  {
    name: "Palau Time",
    abbr: null,
    aliases: ["palau"],
    ids: ["Pacific/Palau"],
    std: {
      abbr: "PWT",
      name: "Palau Time",
      offset: 9
    },
    dst: {},
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    ids: ["Australia/Darwin"],
    std: {
      name: "Australian Central Standard Time",
      abbr: "ACST",
      offset: 9.5
    },
    hem: "s"
  },
  {
    name: "Dumont-d\u2019Urville Time",
    abbr: null,
    aliases: ["dumontdurville"],
    ids: ["Antarctica/DumontDUrville"],
    std: {
      abbr: "CLST",
      name: "Dumont-d\u2019Urville Time",
      offset: 10
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Chuuk Time",
    abbr: null,
    aliases: ["truk"],
    ids: ["Pacific/Truk"],
    std: {
      abbr: "CHUT",
      name: "Chuuk Time",
      offset: 10
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Lord Howe Time",
    abbr: "LHT",
    aliases: ["lord howe", "lord howe standard time"],
    ids: ["Australia/Lord_Howe"],
    std: {
      name: "Lord Howe Standard Time",
      abbr: "LHST",
      offset: 10.5
    },
    dst: {
      name: "Lord Howe Daylight Time",
      abbr: "LHDT",
      offset: 11.5
    },
    long: "(UTC+10:30) Lord Howe Island",
    hem: "s"
  },
  {
    name: "Casey Time",
    abbr: "CAST",
    aliases: ["casey"],
    ids: ["Antarctica/Casey"],
    std: {
      abbr: "CAST",
      name: "Casey Time",
      offset: 11
    },
    dst: {
      name: "Casey Summer Time",
      offset: 8
    },
    hem: "s"
  },
  {
    name: "Magadan Time",
    abbr: null,
    aliases: ["magadan", "magadan standard time"],
    ids: ["Asia/Magadan"],
    std: {
      abbr: "MAGT",
      name: "Magadan Standard Time",
      offset: 11
    },
    dst: {},
    long: "(UTC+11:00) Magadan",
    hem: "n"
  },
  {
    name: "Sakhalin Time",
    abbr: null,
    aliases: ["sakhalin", "sakhalin standard time"],
    ids: ["Asia/Sakhalin"],
    std: {
      abbr: "SAKT",
      name: "Sakhalin Standard Time",
      offset: 11
    },
    dst: {},
    long: "(UTC+11:00) Sakhalin",
    hem: "n"
  },
  {
    name: "Srednekolymsk Time",
    abbr: "SRET",
    aliases: ["srednekolymsk", "russia time zone 10", "chokurdakh"],
    ids: ["Asia/Srednekolymsk"],
    std: {
      abbr: "SRET",
      name: "Srednekolymsk Standard Time",
      offset: 11
    },
    dst: {},
    long: "(UTC+11:00) Chokurdakh",
    hem: "n"
  },
  {
    name: "Vanuatu Time",
    abbr: null,
    aliases: ["vanuatu"],
    ids: ["Pacific/Efate"],
    std: {
      abbr: "VUT",
      name: "Vanuatu Standard Time",
      offset: 11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Solomon Islands Time",
    abbr: null,
    aliases: ["solomon"],
    ids: ["Pacific/Guadalcanal"],
    std: {
      abbr: "SBT",
      name: "Solomon Islands Time",
      offset: 11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Kosrae Time",
    abbr: null,
    aliases: ["kosrae"],
    ids: ["Pacific/Kosrae"],
    std: {
      abbr: "KOST",
      name: "Kosrae Time",
      offset: 11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "New Caledonia Time",
    abbr: null,
    aliases: ["new caledonia"],
    ids: ["Pacific/Noumea"],
    std: {
      abbr: "NCT",
      name: "New Caledonia Standard Time",
      offset: 11
    },
    dst: {
      name: "New Caledonia Summer Time"
    },
    hem: "n"
  },
  {
    name: "Ponape Time",
    abbr: null,
    aliases: ["ponape"],
    ids: ["Pacific/Ponape"],
    std: {
      abbr: "PONT",
      name: "Ponape Time",
      offset: 11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Anadyr Time",
    abbr: null,
    aliases: ["anadyr", "russia time zone 11", "petropavlovsk kamchatsky"],
    ids: ["Asia/Anadyr"],
    std: {
      abbr: "ANAT",
      name: "Anadyr Standard Time",
      offset: 12
    },
    dst: {},
    long: "(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky",
    hem: "n"
  },
  {
    name: "Petropavlovsk-Kamchatski Time",
    abbr: null,
    aliases: ["kamchatka", "russia time zone 11", "anadyr", "petropavlovsk kamchatsky"],
    ids: ["Asia/Kamchatka"],
    std: {
      abbr: "PETT",
      name: "Petropavlovsk-Kamchatski Standard Time",
      offset: 12
    },
    dst: {},
    long: "(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky",
    hem: "n"
  },
  {
    name: "Fiji Time",
    abbr: "FJT",
    aliases: ["fiji", "fiji standard time"],
    ids: ["Pacific/Fiji"],
    std: {
      abbr: "FJT",
      name: "Fiji Standard Time",
      offset: 12
    },
    dst: {
      abbr: "FJT",
      name: "Fiji Summer Time",
      offset: 13
    },
    long: "(UTC+12:00) Fiji",
    hem: "s"
  },
  {
    name: "Tuvalu Time",
    abbr: "TVT",
    aliases: ["tuvalu"],
    ids: ["Pacific/Funafuti"],
    std: {
      abbr: "TVT",
      name: "Tuvalu Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Nauru Time",
    abbr: null,
    aliases: ["nauru"],
    ids: ["Pacific/Nauru"],
    std: {
      abbr: "NRT",
      name: "Nauru Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Norfolk Island Time",
    abbr: null,
    aliases: ["norfolk", "norfolk standard time", "norfolk island"],
    ids: ["Pacific/Norfolk"],
    std: {
      abbr: "NFT",
      name: "Norfolk Island Standard Time",
      offset: 12
    },
    dst: {
      abbr: "NFDT",
      name: "Norfolk Island Daylight Time",
      offset: 11
    },
    long: "(UTC+11:00) Norfolk Island",
    hem: "n"
  },
  {
    name: "Gilbert Islands Time",
    abbr: null,
    aliases: ["gilbert islands"],
    ids: ["Pacific/Tarawa"],
    std: {
      abbr: "GILT",
      name: "Gilbert Islands Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Wake Island Time",
    abbr: null,
    aliases: ["wake"],
    ids: ["Pacific/Wake"],
    std: {
      abbr: "WAKT",
      name: "Wake Island Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Wallis & Futuna Time",
    abbr: null,
    aliases: ["wallis"],
    ids: ["Pacific/Wallis"],
    std: {
      abbr: "WFT",
      name: "Wallis & Futuna Time",
      offset: 12
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Chatham Time",
    abbr: "CHAT",
    aliases: ["chatham", "chatham islands standard time", "chatham islands"],
    ids: ["Pacific/Chatham"],
    std: {
      name: "Chatham Standard Time",
      abbr: "CHAST",
      offset: 12.75
    },
    dst: {
      name: "Chatham Daylight Time",
      abbr: "CHADT",
      offset: 13.75
    },
    long: "(UTC+12:45) Chatham Islands",
    hem: "s"
  },
  {
    name: "West Samoa Time",
    abbr: "WST",
    aliases: ["apia"],
    ids: ["Pacific/Apia"],
    std: {
      abbr: "WST",
      name: "West Samoa Time",
      offset: 13
    },
    dst: {
      abbr: "WST",
      name: "West Samoa Summer Time",
      offset: 14
    },
    hem: "s"
  },
  {
    name: "Phoenix Islands Time",
    abbr: null,
    aliases: ["phoenix islands"],
    ids: ["Pacific/Enderbury"],
    std: {
      abbr: "PHOT",
      name: "Phoenix Islands Time",
      offset: 13
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Tokelau Time",
    abbr: null,
    aliases: ["tokelau"],
    ids: ["Pacific/Fakaofo"],
    std: {
      abbr: "TKT",
      name: "Tokelau Time",
      offset: 13
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Tonga Time",
    abbr: null,
    aliases: ["tonga", "tonga standard time", "nuku'alofa"],
    ids: ["Pacific/Tongatapu"],
    std: {
      abbr: "TOT",
      name: "Tonga Standard Time",
      offset: 13
    },
    dst: {
      name: "Tonga Summer Time",
      offset: 14
    },
    long: "(UTC+13:00) Nuku'alofa",
    hem: "s"
  },
  {
    name: "Line Islands Time",
    abbr: null,
    aliases: ["line islands", "line islands standard time", "kiritimati island"],
    ids: ["Pacific/Kiritimati"],
    std: {
      abbr: "LINT",
      name: "Line Islands Time",
      offset: 14
    },
    dst: {},
    long: "(UTC+14:00) Kiritimati Island",
    hem: "n"
  },
  {
    name: "Niue Time",
    abbr: null,
    aliases: ["niue"],
    ids: ["Pacific/Niue"],
    std: {
      abbr: "NUT",
      name: "Niue Time",
      offset: -11
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Cook Islands Time",
    abbr: "CKT",
    aliases: ["cook"],
    ids: ["Pacific/Rarotonga"],
    std: {
      abbr: "CKT",
      name: "Cook Islands Standard Time",
      offset: -10
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Tahiti Time",
    abbr: null,
    aliases: ["tahiti"],
    ids: ["Pacific/Tahiti"],
    std: {
      abbr: "TAHT",
      name: "Tahiti Time",
      offset: -10
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Marquesas Time",
    abbr: null,
    aliases: ["marquesas", "marquesas standard time"],
    ids: ["Pacific/Marquesas"],
    std: {
      abbr: "MART",
      name: "Marquesas Time",
      offset: -9.5
    },
    dst: {},
    long: "(UTC-09:30) Marquesas Islands",
    hem: "n"
  },
  {
    name: "Aleutian Standard Time",
    iso: "(UTC-10:00) Aleutian Islands",
    aliases: ["aleutian"],
    ids: ["America/Adak"],
    abbr: "HST",
    std: {
      name: "Hawaii Standard Time",
      abbr: "HST",
      offset: -10
    },
    dst: {
      name: "Hawaii Daylight Time",
      abbr: "HDT",
      offset: -9
    },
    hem: "n"
  },
  {
    name: "Gambier Time",
    abbr: null,
    aliases: ["gambier", "utc-09", "coordinated universal time-09"],
    ids: ["Pacific/Gambier"],
    std: {
      abbr: "GAMT",
      name: "Gambier Time",
      offset: -9
    },
    dst: {},
    long: "(UTC-09:00) Coordinated Universal Time-09",
    hem: "n"
  },
  {
    name: "Pitcairn Time",
    abbr: null,
    aliases: ["pitcairn", "utc-08", "coordinated universal time-08"],
    ids: ["Pacific/Pitcairn"],
    std: {
      abbr: "PST",
      name: "Pitcairn Time",
      offset: -8
    },
    dst: {},
    long: "(UTC-08:00) Coordinated Universal Time-08",
    hem: "n"
  },
  {
    name: "",
    dupe: !0,
    ids: ["America/Hermosillo"],
    std: {
      name: "Mexican Pacific Standard Time",
      abbr: "HNPMX",
      offset: -7
    },
    hem: "n"
  },
  {
    name: "Northwest Mexico Time",
    abbr: "HNOMX",
    aliases: [
      "mexico northwest",
      "pacific standard time (mexico)",
      "baja california",
      "pacific mexico"
    ],
    ids: ["America/Santa_Isabel"],
    std: {
      name: "Northwest Mexico Standard Time",
      abbr: "HNNOMX",
      offset: -6
    },
    dst: {
      name: "Northwest Mexico Daylight Time",
      abbr: "HENOMX",
      offset: -5
    },
    long: "(UTC-08:00) Baja California",
    hem: "n"
  },
  {
    name: "Easter Island Time",
    abbr: null,
    aliases: ["easter", "easter island standard time", "easter island"],
    ids: ["Pacific/Easter"],
    std: {
      name: "Easter Island Standard Time",
      abbr: "EAST",
      offset: -6
    },
    dst: {
      name: "Easter Island Summer Time",
      abbr: "EASST",
      offset: -5
    },
    long: "(UTC-06:00) Easter Island",
    hem: "s"
  },
  {
    name: "Ecuador Time",
    abbr: null,
    aliases: ["ecuador"],
    ids: ["America/Guayaquil"],
    std: {
      name: "Ecuador Time",
      abbr: "ECT",
      offset: -5
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Cuba Time",
    abbr: "HCU",
    aliases: ["cuba", "cuba standard time", "havana"],
    ids: ["America/Havana"],
    std: {
      name: "Cuba Standard Time",
      abbr: "HNCU",
      offset: -5
    },
    dst: {
      name: "Cuba Daylight Time",
      abbr: "HECU",
      offset: -4
    },
    long: "(UTC-05:00) Havana",
    hem: "n"
  },
  {
    name: "Peru Time",
    abbr: null,
    aliases: ["peru"],
    ids: ["America/Lima"],
    std: {
      abbr: "PET",
      name: "Peru Standard Time",
      offset: -5
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Paraguay Time",
    abbr: null,
    aliases: ["paraguay", "paraguay standard time", "asuncion"],
    ids: ["America/Asuncion"],
    std: {
      abbr: "PYT",
      name: "Paraguay Standard Time",
      offset: -4
    },
    dst: {
      name: "Paraguay Summer Time",
      offset: -3
    },
    long: "(UTC-04:00) Asuncion",
    hem: "s"
  },
  {
    name: "Venezuela Time",
    abbr: null,
    aliases: ["venezuela", "venezuelan", "venezuela standard time", "caracas"],
    ids: ["America/Caracas"],
    std: {
      name: "Venezuela Time",
      abbr: "VET",
      offset: -4
    },
    dst: {},
    long: "(UTC-04:00) Caracas",
    hem: "n"
  },
  {
    name: "Guyana Time",
    abbr: null,
    aliases: ["guyana"],
    ids: ["America/Guyana"],
    std: {
      name: "Guyana Time",
      abbr: "GYT",
      offset: -4
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Bolivia Time",
    abbr: null,
    aliases: ["bolivia"],
    ids: ["America/La_Paz"],
    std: {
      name: "Bolivia Time",
      abbr: "BOT",
      offset: -4
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Newfoundland Time",
    abbr: "HTN",
    aliases: ["newfoundland", "newfoundland standard time"],
    ids: ["America/St_Johns"],
    std: {
      name: "Newfoundland Standard Time",
      abbr: "HNTN",
      offset: -3.5
    },
    dst: {
      name: "Newfoundland Daylight Time",
      abbr: "HETN",
      offset: -2.5
    },
    long: "(UTC-03:30) Newfoundland",
    hem: "n"
  },
  {
    name: "French Guiana Time",
    abbr: null,
    aliases: ["french guiana"],
    ids: ["America/Cayenne"],
    std: {
      name: "French Guiana Time",
      abbr: "GFT",
      offset: -3
    },
    dst: {},
    hem: "n"
  },
  {
    name: "West Greenland Time",
    abbr: "HOG",
    aliases: ["greenland western", "greenland standard time", "greenland"],
    ids: ["America/Godthab"],
    std: {
      name: "West Greenland Standard Time",
      abbr: "HNOG",
      offset: -3
    },
    dst: {
      name: "West Greenland Summer Time",
      abbr: "HEOG",
      offset: -2
    },
    long: "(UTC-03:00) Greenland",
    hem: "n"
  },
  {
    name: "St. Pierre & Miquelon Time",
    abbr: "HPM",
    aliases: [
      "pierre miquelon",
      "saint pierre standard time",
      "saint pierre and miquelon",
      "saint pierre"
    ],
    ids: ["America/Miquelon"],
    std: {
      name: "St. Pierre & Miquelon Standard Time",
      abbr: "HNPM",
      offset: -3
    },
    dst: {
      name: "St. Pierre & Miquelon Daylight Time",
      abbr: "HEPM",
      offset: -2
    },
    long: "(UTC-03:00) Saint Pierre and Miquelon",
    hem: "n"
  },
  {
    name: "Uruguay Time",
    abbr: "UYT",
    aliases: ["uruguay", "uyst", "montevideo standard time", "montevideo"],
    ids: ["America/Montevideo"],
    std: {
      name: "Uruguay Standard Time",
      abbr: "UYT",
      offset: -3
    },
    dst: {},
    long: "(UTC-03:00) Montevideo",
    hem: "s"
  },
  {
    name: "Suriname Time",
    abbr: null,
    aliases: ["suriname"],
    ids: ["America/Paramaribo"],
    std: {
      name: "Suriname Time",
      abbr: "SRT",
      offset: -3
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Chile Time",
    abbr: "CLT",
    aliases: ["chile"],
    ids: ["America/Santiago"],
    std: {
      name: "Chile Standard Time",
      abbr: "CLT",
      offset: -3
    },
    dst: {
      name: "Chile Summer Time",
      abbr: "CLST",
      offset: -4
    },
    hem: "s"
  },
  {
    name: "Falkland Islands Time",
    abbr: "FKT",
    aliases: ["falkland"],
    ids: ["Atlantic/Stanley"],
    std: {
      abbr: "FKST",
      name: "Falkland Islands Summer Time",
      offset: -3
    },
    dst: {},
    hem: "s"
  },
  {
    name: "Fernando de Noronha Time",
    abbr: null,
    aliases: ["noronha"],
    ids: ["America/Noronha"],
    std: {
      abbr: "FNT",
      name: "Fernando de Noronha Standard Time",
      offset: -2
    },
    dst: {},
    hem: "n"
  },
  {
    name: "South Georgia Time",
    abbr: null,
    aliases: ["south georgia"],
    ids: ["Atlantic/South_Georgia"],
    std: {
      abbr: "GST",
      name: "South Georgia Time",
      offset: -2
    },
    dst: {},
    hem: "n"
  },
  {
    name: "Azores Time",
    abbr: "AZOT",
    aliases: ["azores", "azores standard time"],
    ids: ["Atlantic/Azores"],
    std: {
      abbr: "AZOT",
      name: "Azores Standard Time",
      offset: -1
    },
    dst: {
      name: "Azores Summer Time",
      abbr: "AZOST",
      offset: 0
    },
    long: "(UTC-01:00) Azores",
    hem: "n"
  },
  {
    name: "Cape Verde Time",
    abbr: null,
    aliases: ["cape verde", "cape verde standard time", "cabo verde"],
    ids: ["Atlantic/Cape_Verde"],
    std: {
      abbr: "CVT",
      name: "Cape Verde Standard Time",
      offset: -1
    },
    dst: {},
    long: "(UTC-01:00) Cabo Verde Is.",
    hem: "n"
  }
], ot = {
  "asia/dili": "+9",
  "pacific/palau": "+9",
  "australia/west": "+8",
  "asia/ulan_bator": "+8/+7",
  "asia/choibalsan": "+8",
  "asia/chongqing": "+8",
  "asia/chungking": "+8",
  "asia/harbin": "+8",
  "asia/irkutsk": "+8",
  "asia/macao": "+8",
  "asia/ujung_pandang": "+8",
  "antarctica/davis": "+7",
  "indian/christmas": "+7",
  "asia/ho_chi_minh": "+7",
  "asia/hovd": "+7",
  "asia/novosibirsk": "+7",
  "asia/tomsk": "+7",
  "antarctica/vostok": "+6",
  "asia/dacca": "+6",
  "asia/dhaka": "+6",
  "asia/kashgar": "+6",
  "asia/omsk": "+6",
  "asia/thimbu": "+6",
  "asia/thimphu": "+6",
  "asia/urumqi": "+6",
  "indian/cocos": "+6.5",
  "antarctica/mawson": "+5",
  "indian/kerguelen": "+5",
  "asia/ashkhabad": "+5",
  "asia/dushanbe": "+5",
  "asia/yekaterinburg": "+5",
  "asia/kathmandu": "+5.75",
  "indian/reunion": "+4",
  "indian/mahe": "+4",
  "atlantic/jan_mayen": "+2/+1",
  "atlantic/faroe": "+1/0",
  "pacific/kiritimati": "+14",
  "pacific/apia": "+13/+12",
  "pacific/tongatapu": "+13/+12",
  "pacific/enderbury": "+13",
  "pacific/fakaofo": "+13",
  "antarctica/south_pole": "+12/+11",
  "pacific/norfolk": "+11.5/+10.5",
  "australia/lhi": "+10.5/+9.5",
  "etc/greenwich": "0",
  "etc/utc": "0",
  "etc/universal": "0",
  "etc/zulu": "0",
  "america/atka": "-9/-10",
  "pacific/gambier": "-9",
  "pacific/marquesas": "-9.5",
  "pacific/pitcairn": "-8",
  "america/ensenada": "-7/-8",
  "america/santa_isabel": "-7/-8",
  "mexico/bajanorte": "-7/-8",
  "canada/yukon": "-7/-8",
  "canada/east-saskatchewan": "-6",
  "antarctica/rothera": "-3",
  "atlantic/stanley": "-3",
  "america/nuuk": "-3/-4",
  "america/cayenne": "-3",
  "america/paramaribo": "-3",
  "america/rosario": "-3",
  "america/godthab": "-2/-3",
  "america/miquelon": "-2/-3",
  "america/noronha": "-2",
  "atlantic/south_georgia": "-2",
  "atlantic/cape_verde": "-1",
  "pacific/niue": "-11",
  "pacific/samoa": "-11",
  "pacific/rarotonga": "-10",
  "pacific/tahiti": "-10"
};
const lt = function(a) {
  return a.replace(/\w\S*/g, function(e) {
    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
  });
}, mt = function(a) {
  if (!a)
    return null;
  let e = st.find((n) => n.ids.find((i) => i === a));
  if (!e) {
    let n = ot[a.toLowerCase()];
    if (n !== void 0) {
      let i = `UTC${n}`, t = a.split(/\//), r = lt(t[t.length - 1]);
      r = r.replace(/_/g, " "), r += " Time", e = {
        std: { name: r, abbr: i },
        offset: null
      };
    } else {
      let i = a.replace(/^etc\//i, "");
      e = {
        std: { name: a, abbr: i },
        offset: null
      };
    }
  }
  return {
    iana: a,
    standard: e.std || null,
    daylight: e.dst || null
  };
};
var ut = "1.1.0";
const he = function(a) {
  let e = rt(a) || [];
  return typeof e == "string" && (e = [e]), e = e.map((n) => mt(n)), e;
};
he.prototype.version = ut;
const dt = he, fe = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Honolulu": "Hawaii",
  "America/Juneau": "Alaska",
  "America/Boise": "Mountain Time",
  "America/Dawson": "Dawson, Yukon",
  "America/Chihuahua": "Chihuahua, La Paz, Mazatlan",
  "America/Phoenix": "Arizona",
  "America/Chicago": "Central Time",
  "America/Regina": "Saskatchewan",
  "America/Mexico_City": "Guadalajara, Mexico City, Monterrey",
  "America/Belize": "Central America",
  "America/Detroit": "Eastern Time",
  "America/Bogota": "Bogota, Lima, Quito",
  "America/Caracas": "Caracas, La Paz",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Sao_Paulo": "Brasilia",
  "America/Tijuana": "Tijuana",
  "America/Montevideo": "Montevideo",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Los_Angeles": "Pacific Time",
  "Atlantic/Azores": "Azores",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  GMT: "UTC",
  "Europe/London": "Edinburgh, London",
  "Europe/Dublin": "Dublin",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca, Monrovia",
  "Atlantic/Canary": "Canary Islands",
  "Europe/Belgrade": "Belgrade, Bratislava, Budapest, Ljubljana, Prague",
  "Europe/Sarajevo": "Sarajevo, Skopje, Warsaw, Zagreb",
  "Europe/Brussels": "Brussels, Copenhagen, Madrid, Paris",
  "Europe/Amsterdam": "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
  "Africa/Algiers": "West Central Africa",
  "Europe/Bucharest": "Bucharest",
  "Africa/Cairo": "Cairo",
  "Europe/Helsinki": "Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius",
  "Europe/Athens": "Athens, Minsk",
  "Asia/Jerusalem": "Jerusalem",
  "Africa/Harare": "Harare, Pretoria",
  "Europe/Moscow": "Istanbul, Moscow, St. Petersburg, Volgograd",
  "Asia/Kuwait": "Kuwait, Riyadh",
  "Africa/Nairobi": "Nairobi",
  "Asia/Baghdad": "Baghdad",
  "Asia/Tehran": "Tehran",
  "Asia/Dubai": "Abu Dhabi, Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Ekaterinburg",
  "Asia/Karachi": "Islamabad, Karachi, Tashkent",
  "Asia/Kolkata": "Chennai, Kolkata, Mumbai, New Delhi",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Colombo": "Sri Jayawardenepura",
  "Asia/Almaty": "Almaty, Novosibirsk",
  "Asia/Rangoon": "Yangon Rangoon",
  "Asia/Bangkok": "Bangkok, Hanoi, Jakarta",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Shanghai": "Beijing, Chongqing, Hong Kong SAR, Urumqi",
  "Asia/Kuala_Lumpur": "Kuala Lumpur, Singapore",
  "Asia/Taipei": "Taipei",
  "Australia/Perth": "Perth",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Asia/Yakutsk": "Yakutsk",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Brisbane": "Brisbane",
  "Australia/Hobart": "Hobart",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Guam": "Guam, Port Moresby",
  "Asia/Magadan": "Magadan, Solomon Islands, New Caledonia",
  "Asia/Kamchatka": "Kamchatka, Marshall Islands",
  "Pacific/Fiji": "Fiji Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Pacific/Tongatapu": "Nuku'alofa"
};
function ct(a, e) {
  return e || (e = fe), Object.entries(e).reduce((n, i) => {
    var ea, Da, Ia, Na;
    const t = qi.now(i[0]), r = t.timezone(), s = dt(i[0]);
    let o = "", m = t.isDST() ? (ea = s[0].daylight) == null ? void 0 : ea.abbr : (Da = s[0].standard) == null ? void 0 : Da.abbr, d = t.isDST() ? (Ia = s[0].daylight) == null ? void 0 : Ia.name : (Na = s[0].standard) == null ? void 0 : Na.name;
    const b = r.current.offset * 60, A = `${b / 60 ^ 0}:` + (b % 60 === 0 ? "00" : Math.abs(b % 60)), I = `(GMT${A.includes("-") ? A : `+${A}`}) ${i[1]}`;
    switch (a) {
      case "original":
        o = I;
        break;
      case "altName":
        o = `${I} ${d != null && d.length ? `(${d})` : ""}`;
        break;
      case "abbrev":
        o = `${I} ${(m == null ? void 0 : m.length) < 5 ? `(${m})` : ""}`;
        break;
      default:
        o = `${I}`;
    }
    return n.push({
      value: r.name,
      label: o,
      offset: r.current.offset,
      abbrev: m,
      altName: d
    }), n;
  }, []).sort((n, i) => n.offset - i.offset);
}
function ht(a, e) {
  return sa(e).find((n) => n.value === a);
}
function ft({ labelStyle: a, timezones: e } = {}) {
  return { timezoneOptions: be(() => ct(sa(a), sa(e))), getSelectedInfo: ht };
}
const bt = {
  class: "vue-timezone-select",
  style: { width: "100%" }
}, gt = {
  name: "TimezoneSelect"
}, yt = /* @__PURE__ */ ge({
  ...gt,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    timezones: {
      type: Object,
      default: () => fe
    },
    labelStyle: {
      type: String,
      default: "original"
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: e }) {
    const n = a, { timezoneOptions: i, getSelectedInfo: t } = ft({
      labelStyle: Ba(n, "labelStyle"),
      timezones: Ba(n, "timezones")
    });
    function r(s) {
      e("update:modelValue", s);
      const o = t(s, i);
      e("change", { ...o });
    }
    return (s, o) => {
      const m = Oa("el-option"), d = Oa("el-select");
      return ca(), qa("div", bt, [
        pe(d, {
          style: { width: "100%" },
          placeholder: a.placeholder,
          filterable: a.filterable,
          "model-value": n.modelValue,
          onChange: r
        }, {
          default: ye(() => [
            (ca(!0), qa(ke, null, Ae(sa(i), (b) => (ca(), Te(m, {
              key: b.value,
              label: b.label,
              value: b.value
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["placeholder", "filterable", "model-value"])
      ]);
    };
  }
});
export {
  yt as default,
  ft as useTimezoneSelect
};
//# sourceMappingURL=index.es.js.map
