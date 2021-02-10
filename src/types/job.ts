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

export enum ApplicationStatus {
   NotSent = 'Not sent',
   Sent = 'Sent',
   Processing = 'Processing',
   Recruitment = 'Recruitment',
   Accepted = 'Accepted',
   Refusal = 'Refusal',
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
   status: ApplicationStatus,
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