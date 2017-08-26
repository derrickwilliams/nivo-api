/*
 * This file is part of the nivo project.
 *
 * (c) 2016-today Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

const Joi = require('joi')
const { Bar } = require('nivo')
const common = require('./common')

module.exports = {
    component: Bar,
    schema: Joi.object().keys(
        Object.assign({}, common.dimensions, common.axes, {
            // data
            data: Joi.array().min(1).required(),
            indexBy: Joi.string().required(),
            keys: Joi.array().sparse(false).min(1).unique().required(),

            groupMode: Joi.any().valid(['grouped', 'stacked']),
            layout: Joi.any().valid(['horizontal', 'vertical']),

            xPadding: Joi.number(),

            // grid
            enableGridX: Joi.boolean(),
            enableGridY: Joi.boolean(),

            // labels
            enableLabels: Joi.boolean(),
            labelsTextColor: Joi.string(),
            labelsLinkColor: Joi.string(),

            // theming
            colors: Joi.string(),
            colorBy: Joi.string(),
        })
    ),
    runtimeProps: ['width', 'height', 'colors', 'groupMode'],
    defaults: {
        margin: { top: 40, right: 50, bottom: 40, left: 50 },
    },
}
