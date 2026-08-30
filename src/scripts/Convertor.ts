
export abstract class Convertor
{
    public static BaseToBase(input : string, inputBase : number, outputBase : number) : string
    {
        if(input.length === 0) return "0";
        let decimal : number = parseInt(input, inputBase);
        return Number(decimal).toString(outputBase);
    }

    public static TextToDecimal(input : string) : string
    {
        let result : string = "";
        const chars : string[] = input.split("");
        for(let i : number = 0; i < chars.length; i++)
        {
            result += chars[i].charCodeAt(0) + " ";
        }
        return result.trimEnd();
    }

    public static DecimalToText(input : number[]) : string
    {
        let result : string = "";
        for(let i : number = 0; i < input.length; i++)
        {
            result += String.fromCharCode(input[i]);
        }
        return result;
    }

    public static HSVtoRGB(h : number, s : number, v : number) : [number, number, number]
    {
        let c : number = v * s;
        let x : number = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m : number = v - c;
        let rS : number = 0;
        let gS : number = 0;
        let bS : number = 0;

        if(h >= 0 && h < 60){rS = c; gS = x;} else
        if(h < 120)         {rS = x; gS = c;} else
        if(h < 180)         {gS = c; bS = x;} else
        if(h < 240)         {gS = x; bS = c;} else
        if(h < 300)         {rS = x; bS = c;} else
        if(h < 360)         {rS = c; bS = x;};

        return [Math.round((rS + m) * 255), Math.round((gS + m) * 255), Math.round((bS + m) * 255)];
    }

    public static RGBtoHSV(r : number, g : number, b : number) : [number, number, number]
    {
        let rS : number = r / 255;
        let gS : number = g / 255;
        let bS : number = b / 255;
        let cMax : number = Math.max(rS, gS, bS);
        let cMin : number = Math.min(rS, gS, bS);
        let delta = cMax - cMin;
        let H = 0;
        switch (cMax)
        {
            case rS:
                H = 60 * (((gS - bS) / delta) % 6)
                break;
            case gS:
                H = 60 * ((bS - rS) / delta + 2)
                break;
            case bS:
                H = 60 * ((rS - gS) / delta + 4)
                break;
            default:
                break;
        }
        H = Math.round(H);
        let S = Math.round(cMax === 0 ? 0 : delta / cMax * 1000) / 1000;
        let V = Math.round(cMax * 1000) / 1000;
        return [H, S, V];
    }
}