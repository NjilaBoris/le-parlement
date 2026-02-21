export const ROUTES = {
  HOME: "/",
  PARLIAMENT: "/parliament",
  ELECTIONS: "/elections",
  POLITICS: "/politics",
  LOCAL_GOVERNANCE: "/local-governance",
  ECONOMY_AND_SOCIETY: "/economy-and-society",
  YOUTH_SPORTLIGHT: "/youth-sportlight",
  OPINIONS: "/opinions",
  ARTICLES: (id: string) => `/articles/${id}`,
};
