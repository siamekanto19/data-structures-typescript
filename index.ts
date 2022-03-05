import { LinkedList } from './linked-list/LinkedList'

const MyList = new LinkedList()
MyList.Append('Brad')
MyList.Append('John')
MyList.Append('Kent')
MyList.Append('Erik')
MyList.Prepend('Colt')
MyList.Delete('Erik')

console.log(MyList.PrettyPrint())
