export const ROUTES = {
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  HOME: "/",
  PARLIAMENT: "/parliament",
  ELECTIONS: "/elections",
  POLITICS: "/politics",
  LOCAL_GOVERNANCE: "/local-governance",
  ECONOMY_AND_SOCIETY: "/economy-society",
  YOUTH_SPOTLIGHT: "/youth-spotlight",
  OPINIONS: "/opinions",
  ARTICLES: (id: string) => `/articles/${id}`,
};
