export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-2484-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg";


export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
     process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPEN_KEY =
    process.env.REACT_APP_OPEN_KEY;
