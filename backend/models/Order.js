import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrderSchema = new Schema({
    buyerId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    vendorId: {
        type: Schema.Types.ObjectId,
        ref: 'Vendors',
        required: true
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Products',
                required: true
            },
            batchId: {
                type: Schema.Types.ObjectId,
                ref: 'Products.batches',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            priceAtPurchase: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    deliveryDate: {
        type: Date
    }
});

export default mongoose.model('Orders', OrderSchema);