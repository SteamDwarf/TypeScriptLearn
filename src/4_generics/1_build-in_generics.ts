const nums: Array<number> = [1, 2]

const testF = async () => {
    const prom = new Promise<number>((resolve, reject) => {
        resolve(1);
    })
}

const check: Record<string, boolean> = {
    drive: true,
    kpp: false
}

export {};