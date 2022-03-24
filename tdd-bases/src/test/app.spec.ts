import React from "react";

describe('Principales matchers', ()=>{

    test('toBe, para tipos primitivos', ()=>{
        const str = 'tobeString';
        expect(str).toBe('tobeString');
    });

    test('toEqual, para tipos arrays y objetos', ()=>{
        const obj = {con: 1};
        expect(obj).toEqual({con: 1});
    });

    test('Modificador not', () => {
        const obj = {con: 2};
        expect(obj).not.toEqual({con: 1});
    });
/*    test('expresion regular en test', () => {
        const b = 'abc'
        expect(b).toMatch(/I/);
    });*/
})

describe('formas de resolver promesas o metodos asincronos', ()=>{
    const callback = (cb: Function) => {
        setTimeout(()=>{
            cb(true);
        }, 1000);
    }
    const promise = () => {
        return new Promise(resolve => resolve(true));
    }
    test('async read callback', (done) => {
        callback((result: boolean)=> {
            expect(result).toBeTruthy();
            done();
        })
    });

    test('promises async', (done) => {
        promise().then((value)=>{
            expect(value).toBeTruthy();
            done();
        });
    });

    test('promise con .resolves', () => {
        expect(promise()).resolves.toBeTruthy();
    });

    test('async/await', async () => {
        const result = await promise();
        expect(result).toBeTruthy();
    });
})
