export const ROUTES = {
  HOME: "/",
  PARLIAMENT: "/parliament",
  ELECTIONS: "/elections",
  POLITICS: "/politics",
  LOCAL_GOVERNANCE: "/local-governance",
  ECONOMY_AND_SOCIETY: "/economy-society",
  YOUTH_SPORTLIGHT: "/youth-spotlight",
  OPINIONS: "/opinions",
  ARTICLES: (id: string) => `/articles/${id}`,
};
