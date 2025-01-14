
export const xml = {
    infNFe: {
        $: { Id: 'NFe12345678901234567890123456789012345678901234', versao: '4.00' },
        ide: {
            cUF: '35',
            cNF: '12345678',
            natOp: 'Venda',
            mod: '55',
            serie: '1',
            nNF: '1234',
            dhEmi: '2025-01-11T16:30:00-03:00',
            tpNF: '1',
            idDest: '1',
            cMunFG: '3550308',
            tpImp: '1',
            tpEmis: '1',
            cDV: '0',
            tpAmb: '2',
            finNFe: '1',
            indFinal: '1',
            indPres: '1',
            procEmi: '0',
            verProc: '1.0'
        },
        emit: {
            CNPJ: '12345678000195',
            xNome: 'Empresa Exemplo LTDA',
            xFant: 'Empresa Exemplo',
            enderEmit: {
                xLgr: 'Rua Exemplo',
                nro: '100',
                xBairro: 'Bairro Exemplo',
                cMun: '3550308',
                xMun: 'São Paulo',
                UF: 'SP',
                CEP: '01000000',
                cPais: '1058',
                xPais: 'Brasil',
                fone: '1133334444'
            },
            IE: '123456789',
            CRT: '3'
        },
        dest: {
            CPF: '12345678909',
            xNome: 'Cliente Exemplo',
            enderDest: {
                xLgr: 'Avenida Cliente',
                nro: '500',
                xBairro: 'Bairro Cliente',
                cMun: '3550308',
                xMun: 'São Paulo',
                UF: 'SP',
                CEP: '02000000',
                cPais: '1058',
                xPais: 'Brasil',
                fone: '1199998888'
            },
            indIEDest: '9'
        },
        det: [
            {
                $: { nItem: '1' },
                prod: {
                    cProd: '001',
                    xProd: 'Produto Exemplo',
                    NCM: '12345678',
                    CFOP: '5102',
                    uCom: 'UN',
                    qCom: '10.00',
                    vUnCom: '100.00',
                    vProd: '1000.00',
                    uTrib: 'UN',
                    qTrib: '10.00',
                    vUnTrib: '100.00',
                    indTot: '1'
                },
                imposto: {
                    ICMS: {
                        ICMS00: {
                            orig: '0',
                            CST: '00',
                            modBC: '3',
                            vBC: '1000.00',
                            pICMS: '18.00',
                            vICMS: '180.00'
                        }
                    },
                    PIS: {
                        PISAliq: {
                            CST: '01',
                            vBC: '1000.00',
                            pPIS: '1.65',
                            vPIS: '16.50'
                        }
                    },
                    COFINS: {
                        COFINSAliq: {
                            CST: '01',
                            vBC: '1000.00',
                            pCOFINS: '7.60',
                            vCOFINS: '76.00'
                        }
                    }
                }
            }
        ],
        total: {
            ICMSTot: {
                vBC: '1000.00',
                vICMS: '180.00',
                vICMSDeson: '0.00',
                vFCP: '0.00',
                vBCST: '0.00',
                vST: '0.00',
                vFCPST: '0.00',
                vFCPSTRet: '0.00',
                vProd: '1000.00',
                vFrete: '0.00',
                vSeg: '0.00',
                vDesc: '0.00',
                vII: '0.00',
                vIPI: '0.00',
                vIPIDevol: '0.00',
                vPIS: '16.50',
                vCOFINS: '76.00',
                vOutro: '0.00',
                vNF: '1000.00'
            }
        },
        transp: {
            modFrete: '9'
        }
    }
}



