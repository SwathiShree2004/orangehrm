
export function generateUniqueId(): string {
    return `${Date.now()}${Math.floor(Math.random()* 1000)}`;
}
 
export function generateRandomFirstName(): string {
    const names = ['Asha', 'David', 'Meera', 'Rahul'];
    return names[Math.floor(Math.random() * names.length)];
}// output: "Asha" or "David" or "Meera" or "Rahul"
 
export function generateRandomUsername(firstName: string): string {
    return `${firstName.toLowerCase()}_${generateUniqueId()}`;
}
export function generateRandomEmail(
    firstName:string,
    domain: string ='example.com'
):string{
    return `${firstName.toLowerCase()}_${generateUniqueId()}@${domain}`;
}