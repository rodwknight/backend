
interface $ {
    Id: string
    versao: string
}

interface Ide {
    cUF: string
    cNF: string
    natOp: string
    mod: string
    serie: string
    nNF: string
    dhEmi: string
    tpNF: string
    idDest: string
    cMunFG: string
    tpImp: string
    tpEmis: string
    cDV: string
    tpAmb: string
    finNFe: string
    indFinal: string
    indPres: string
    procEmi: string
    verProc: string
}

interface EnderEmit {
    xLgr: string
    nro: string
    xBairro: string
    cMun: string
    xMun: string
    UF: string
    CEP: string
    cPais: string
    xPais: string
    fone: string
}

interface Emit {
    CNPJ: string
    xNome: string
    xFant: string
    enderEmit: EnderEmit
    IE: string
    CRT: string
}

interface EnderDest {
    xLgr: string
    nro: string
    xBairro: string
    cMun: string
    xMun: string
    UF: string
    CEP: string
    cPais: string
    xPais: string
    fone: string
}

interface Dest {
    CPF: string
    xNome: string
    enderDest: EnderDest
    indIEDest: string
}

interface $det {
    nItem: string
}

interface Prod {
    cProd: string
    xProd: string
    NCM: string
    CFOP: string
    uCom: string
    qCom: string
    vUnCom: string
    vProd: string
    uTrib: string
    qTrib: string
    vUnTrib: string
    indTot: string
}

interface ICMS {
    ICMS00: ICMS00
}

interface ICMS00 {
    orig: string
    CST: string
    modBC: string
    vBC: string
    pICMS: string
    vICMS: string
}

interface PISAliq {
    CST: string
    vBC: string
    pPIS: string
    vPIS: string
}

interface PIS {
    PISAliq: PISAliq
}

interface COFINS {
    COFINSAliq: COFINSAliq
}

interface COFINSAliq {
    CST: string
    vBC: string
    pCOFINS: string
    vCOFINS: string
}

interface Imposto {
    ICMS: ICMS
    PIS: PIS
    COFINS: COFINS
}

interface Det {
    $: $det
    prod: Prod
    imposto: Imposto
}

interface ICMSTot {
    vBC: string
    vICMS: string
    vICMSDeson: string
    vFCP: string
    vBCST: string
    vST: string
    vFCPST: string
    vFCPSTRet: string
    vProd: string
    vFrete: string
    vSeg: string
    vDesc: string
    vII: string
    vIPI: string
    vIPIDevol: string
    vPIS: string
    vCOFINS: string
    vOutro: string
    vNF: string
}

interface Total {
    ICMSTot: ICMSTot
}

interface Transp {
    modFrete: string
}

interface InfNef {
    $: $
    ide: Ide
    emit: Emit
    dest: Dest
    det: Det[]
    total: Total
    transp: Transp
}

export interface NfeData {
    infNFe: InfNef
}