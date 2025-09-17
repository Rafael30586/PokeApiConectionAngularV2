export interface IPokemon{
    id: number,
    name: string,
    height: number,
    weight: number,
    types: IType[],
    sprites: ISprite
    stats: IStat[]
}

export interface IType{
    type: ITypeB
}

export interface ITypeB{
    name: string
}

export interface ISprite{
    front_default: string,
    back_default: string
}

export interface IStat{
    base_stat: number
    stat: IStatB
}

export interface IStatB{
    name:string
}