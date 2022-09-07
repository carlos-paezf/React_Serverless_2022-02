import { VehicleProps } from "../types";
import { VehiclesMocks } from "../util/vehicles.mock";
import { v4 as uuid } from 'uuid';


class VehicleService {
    public static getVehicles(): Promise<VehicleProps[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                VehiclesMocks.length
                    ? resolve(VehiclesMocks)
                    : reject(new Error("No hay elementos"))
            }, 3000)
        })
    }

    public static getVehicleByCode(code: string): Promise<VehicleProps> {
        return new Promise((resolve, reject) => {
            const data = VehiclesMocks
                .filter((vehicle: VehicleProps) => vehicle.code === code)
                .shift()
            setTimeout(() => {
                data
                    ? resolve(data)
                    : reject(new Error('No se ha encontrado ningún vehículo con el código ingresado'))
            }, 2000)
        })
    }

    public static createVehicle({ code, ...rest }: VehicleProps) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(VehiclesMocks.push({
                    code: uuid(),
                    ...rest
                }))
            }, 2500)
        })
    }

    public static editVehicleByCode({ code, ...rest }: VehicleProps): Promise<VehicleProps | unknown> {
        return new Promise(async (resolve, reject) => {
            const vehicle = await this.getVehicleByCode(code)
            setTimeout(() => {
                if (!vehicle) return reject(new Error('No se ha encontrado ningún vehículo con el código ingresado'))
                const vehicleEdit = { ...vehicle, code, ...rest } as VehicleProps
                resolve(vehicleEdit)
            }, 1000)
        })
    }

    public static deleteVehicleByCode(code: string): Promise<VehicleProps[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(VehiclesMocks.filter((vehicle: VehicleProps) => vehicle.code !== code))
            }, 1000)
        })
    }
}

export default VehicleService