const complexRecord = {
    invoice: 'INV-892',
    buyer: {
        name: 'Jane Doe',
        nin: 'CM ... 123',
        location: { city: 'Kampala', zone: 'Makindye' }
    }
}

let data = {

    schema: {

        type: 'struct',

        fields: [

            { type: 'int32', optional: false, field: 'id' },

            { type: 'string', optional: false, field: 'account_name' },

            { type: 'string', optional: true, field: 'school' },

            { type: 'string', optional: false, field: 'phone_number' },

            {

                type: 'bytes',

                optional: false,

                name: 'org.apache.kafka.connect.data.Decimal',

                version: 1,

                parameters: { scale: '2', 'connect.decimal.precision': '10' },

                field: 'balance'

            },

            {

                type: 'int32',

                optional: true,

                name: 'io.debezium.time.Date',

                version: 1,

                field: 'alert_date'

            },

            {

                type: 'string',

                optional: true,

                default: 'Payment Reminder',

                field: 'message_type'

            },

            { type: 'string', optional: true, field: 'sent_status' },

            {

                type: 'int64',

                optional: true,

                name: 'io.debezium.time.Timestamp',

                version: 1,

                field: 'sent_at'

            },

            { type: 'string', optional: true, field: 'last_error' },

            {

                type: 'string',

                optional: true,

                name: 'io.debezium.time.ZonedTimestamp',
            },

            {

                type: 'string',

                optional: true,

                name: 'io.debezium.time.ZonedTimestamp',

                version: 1,

                field: 'updated_at'

            },

            { type: 'string', optional: true, field: '__deleted' }

        ],

        optional: false,

        name: 'mysql.testdb.student_daily_alerts.Value'

    },

    payload: {

        id: 10,

        account_name: 'SMK-010',

        school: 'SMACK',

        phone_number: '256772998877',

        balance: 'AN1AoA==',

        alert_date: 20536,

        message_type: 'Balance Update',

        sent_status: 'SENT',

        sent_at: 1774343262000,

        last_error: null,

        created_at: '2026-03-24T09:07:42Z',

        updated_at: '2026-03-24T11:43:08Z',

        __deleted: 'false'

    }

}

// console.log(data)

// console.table(data)

// console.dir(data, { depth: null })


const sales = ['Cash', 'Credit', 'Cash', 'Cash']
const numbers = [1, 2, 3, 4, 5, 6, 7]



console.time("for loop")
let sum = 0;
for (let i = 1; i <= 1000_000; i++) {
    sum += i
}
console.timeEnd("for loop")

console.log(sum)

console.time("while loop")
let _sum = 0;
i = 1
while (i <= 1000_000) {
    _sum += i
    i++
}
console.timeEnd("while loop")

console.log(_sum)




