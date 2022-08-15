const generators = {
    /**
     * @description Gera um número aleatório entre 0 e o valor passado por parâmetro*/
    randomId: (max) => {
        return Math.round(Math.random() * max);
    }
    
}

export default generators;