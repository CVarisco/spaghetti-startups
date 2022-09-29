export type Industry = 'Software Development'
export type CompanySize = '1' 

export interface Company {
    name: string,
    description: string,
    logo: string,
    website: string,
    linkedin: string,
    industries: Industry
    companySize: CompanySize
    headquarterAddres: string,
    foundedAt: Date
}