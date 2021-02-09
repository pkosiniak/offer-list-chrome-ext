export type StackRequirements = {
   name: string,
   level?: string,
}

export type OfferLink = {
   url: string,
   name?: string,
   isAvailable?: boolean
}
export type Company = {
   name?: string,
   location?: string,
}

export type Position = {
   name?: string,
   level?: string
}

export type Job = {
   id: string,
   company: Company,
   position: Position,
   salary: string,
   links: OfferLink[],
   requirements: StackRequirements[],
   notes: string,
   exposeDate: Date,
   applicationDate: Date,
}

export type Offer = Partial<Job>
export type OfferList = Offer[];

export type ExportOfferList = {
   offerList: OfferList,
   meta: {
      note: string | null,
      timestamp: number,
   }
}