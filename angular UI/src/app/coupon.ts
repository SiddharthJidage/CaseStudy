
export class coupon{

  constructor(
    public  id: string,
    public  provider: string,
    public  code: string,
    public  description: string,
    public  expiryDate: string,

  )
  {
    this.id=id;
    this.provider=provider;
    this.code=code;
    this.description=description;
    this.expiryDate=expiryDate;
}

}
