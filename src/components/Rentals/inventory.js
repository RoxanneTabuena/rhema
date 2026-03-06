const bassAmps = 
`Aquilar DB751
Aguilar Tone Hammer 500
Ampeg SVT Classic
Ampeg SVT Classic (vintage)
Ampeg SVT Pro IV
Eden WT800
GK 400RB
GK 800RB
GK 1001RB
SWR SM900
SWR SM400`

const bassCabinets = `
Aguilar DB410
Aguilar DB115
Aguilar GS410
Ampeg 8×10 SVT810e
Ampeg 4×10 SVT410HLF
Eden 1×15
Eden 2×12
Eden 4×10
GK 4×10 Neo
Hartke 1×15
Hartke 4×10
SWR 1×15
SWR 2×12
SWR 4×10
`
const bassComboAmps = `
Ampeg BA115
Ampeg B15 Vintage Combo
Eden Metro 2×10 Combo
GK MB150
SWR California Blonde
SWR Redhead
`

const guitarAmps = `
Fender Blues Deville 2×12
Fender Deluxe Reverb – 65′ Reissue
Fender Deville
Fender Hot Rod Deluxe
Fender Hot Rod Deville 2×12
Fender Hot Rod Deville 4×10
Fender Super Reverb
Fender Twin Reverb – 65′ Reissue
Fender Twin Reverb – Silverface
Marshall JCM800
Marshall JCM900
Mesa-Boogie Dual Rectifier
Mesa-Boogie-Triple Rectifier
Roland JC120
Trace Elliot TA100
Trace Elliot TA200
Vox AC30
`

const guitarCabinets = `
Marshall 1960A 4×12 Slant Cab
Marshall 1960B 4x12 Straight Cab
Mesa-Boogie 4x12 Slant Cab
Mesa-Boogie 4x12 Straight Cab
`

const electricGuitars = `
Fender Stratocaster (American)
Fender Telecaster (American)
Gibson Les Paul
Gibson ES335
Kramer
`

const acousticGuitars = `
Gibson J-45 steel string guitar
Gibson Chet Atkins nylon string guitar
Martin D-35 steel string guitar
Taylor 714CE steel string guitar
Taylor T5 steel string guitar
Taylor 414Ce nylon string guitar w/pickup
Yamaha FGX700SC acoustic/electric guitar
`

const bassGuitars = `
Fender P-Bass
Fender Jazz Bass 4-string
Fender Jazz Bass 5-string (rosewood neck)
Musicman Stringray 4-string
Musicman Stringray 5-string
`

const keyboards = `
Korg Triton Pro 76
Korg KingKorg
Korg Kronos X 88
Kurzweil PC88MX
Kurzweil 2600
Kurzweil 2600xs
Moog Little Phatty II
Moog Minimoog Voyager
Nord Electro 4
Nord Lead
Nord Stage 2 88
Nord Stage 2 EX 88
Roland Gaia SH-01
Roland RD500
Roland RD700SX
Yamaha CP300 Stage Piano
Yamaha DX7
Yamaha Motif ES7
Yamaha Motif ES8
Yamaha Motif XS8
Yamaha Motif XF8
Yamaha S90XS
`

const vintageKeyboards = `
Fender Rhodes 73 Dyno Rhodes Electric Piano
Fender Rhodes 73 Stage Electric Piano
Fender Rhodes 73 Suitcase Electric Piano
Fender Rhodes 88 Stage Electric Piano
Fender Rhodes 88 Suitcase Electric Piano
Hohner D6 Clavinet
Wurlitzer 200A Electric Piano
`
const drumSets = `Drum Workshop DW Collectors (White Glass)
Rack Toms: 8x7, 10x7, 10x8, 12x8, 12x9, 13x10
Floor Toms: 14x12, 14x14, 16x14, 16x16, 18x16 (all with legs)
Snare Drums: 5x14, 6.5x14, 8x14, 5.5x14 Edge, 6.5x14 Edge
Bass Drum: 18x16, 20x16, 22x18, 24x18
Gong Drum:  22" Gong Drum

Drum Workshop DW Collectors (Black)
Rack Toms: 8x7, 10x7, 12x8, 13x9, 14x11
Floor Toms: 14x14, 16x14, 16x16, 18x16 (all with legs)
Bass Drums: 20x14, 22x14
Snare Drums: 4x13, 5.5x14, 7x14

Gretsch New Classic (Black Galaxy Sparkle)
Rack Toms: 8x7, 10x8, 12x8, 12x9
Floor Toms: 14x14, 16x16 (all with legs)
Bass Drums 18x14, 20x16, 22x18
Snare Drums: 5.5x14, 6.5x14 (Bronze Sparkle)

Ludwig (Gold Sparkle - Vintage 1960s)
Rack Toms: 12x9, 13x9
Floor Toms: 14x14, 16x16 (all with legs)
Bass Drums: 20x14, 22x14
Snare Drums: 5x14

Pearl MCX Maple (Red Wine)
Rack Toms: 10x8,12x9, 13x9
Floor Toms: 14x14, 16x16, 18x16 (all with legs)
Bass Drums: 20x16, 22x18
Snare Drums: 5.5x14, 6.5x14

Mapex Saturn (Cherry Fade)
Rack Toms: 10x8,12x9
Floor Toms: 14x14, 16x16 (all with legs)
Bass Drums: 22x18
Snare Drums: 5x14

Tama Starclassic Birch/Bubinga
Rack Toms: 10x8, 12x8, 12x9, 13x9
Floor Toms: 14x14, 16x16, 18x16 (all with legs)
Bass Drums: 20x14, 22x16, 26x14
Snare Drums: 5x14, 6.5x14, various other Tama snare drums

Yamaha Absolute Maple (White Grape Sparkle) - ALL SIZES

Yamaha Absolute Nouveau Maple (Black) - ALL SIZES

Yamaha Absolute Birch (Black) - ALL SIZES

Yamaha Hybrid Maple (Vintage Natural) - ALL SIZES`

const djGear = `
Technics SL1200MK Turntables

Stanton ST-150 Turntables

Rane TTM-57SL Mixers with Serato Scratch Live
`

const inventoryCat = (productList) => {
    let products = productList.split('\n').map((p)=>{
        let brand = p.split(' ')[0]
        return {
            name: p, brand: brand
        }
    })
    return products
}

export const drumInventoryCat = () => {
    let drumInventory = {}
    drumSets.split('\n\n').forEach((s)=>{
        let pieces = s.split('\n')
        if(pieces.length === 1) {
            let title = pieces[0].replace('- ALL SIZES', '')
            drumInventory[title] = ['ALL SIZES']
        }else{
            let title = pieces[0]
            drumInventory[title] =  Array.from(pieces).slice(1)
    }})
    return drumInventory
}

export const inventory = {
    'Bass Amps' : inventoryCat(bassAmps),
    'Bass Cabinets' : inventoryCat(bassCabinets),
    'Bass Combo Amps' : inventoryCat(bassComboAmps),
    'Guitar Amps' : inventoryCat(guitarAmps),
    'Guitar Cabinets' : inventoryCat(guitarCabinets),
    'Electric Guitars' : inventoryCat(electricGuitars),
    'Acoustic Guitars' : inventoryCat(acousticGuitars),
    'Bass Guitars' : inventoryCat(bassGuitars),
    'Keyboards/Synthesizers' : inventoryCat(keyboards),
    'Vintage Keyboards' : inventoryCat(vintageKeyboards),

}

