export type Quote = {
    q: string;
    a: string;
    h: string;
};

  export interface repo {
    id: number
    name: string
    description: string
    url: string
    openGraphImageUrl: string
    languages: any
    primaryLanguage: any
    created_at: string
    visibility: string
    isFork: boolean
  }
  
export interface repos {
  repos: [{
      id: number
      name: string
      description: string
      html_url: string
      created_at: string
      visibility: string
      fork: boolean
  }]
}