import { z } from "zod";


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

export const formSchema = z.object({
  company_name: z.string().min(4, {
    message: "Company Name must at least 4 characters",
  }),
  fullname: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  msg: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})