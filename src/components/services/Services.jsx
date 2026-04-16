import { motion } from 'motion/react';
import './Services.css'
import computer from '../../assets/icons/computer.png'
import bankrec from '../../assets/icons/bankrec.png'
import accrec from '../../assets/icons/accrec.png'
import gst from '../../assets/icons/gst.png'
import payroll from '../../assets/icons/payroll.png'
import admin from "../../assets/icons/admin.png";

export default function Services() {
    return (
      <div id="services_holder">
        <div id="services_title">
          Helping you stay organized, compliant, and confident with efficient
          bookkeeping you can trust.
        </div>
        <div id="services_on_offer">
          We offer a range of services to keep your business on track
        </div>
        <div id="services_list">
          <motion.div
            className="services_item"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true , amount: 0.6}}
          >
            <div className="services_type">
              <img className='services_icon' src={computer} alt="logo"></img>
              Bookkeeping using Computerised Accounts Package
            </div>
            <div className="services_description">
              Service utilizing computerized accounts software such as Xero &
              MYOB for accurate financial tracking, reporting, and streamlined
              business operations.
            </div>
          </motion.div>
          <motion.div
            className="services_item"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="services_type">
              <img className='services_icon' src={bankrec} alt="logo"></img>
              Bank Reconciliations
            </div>
            <div className="services_description">
              Service reconciling bank statements, ensuring financial accuracy,
              identifying discrepancies, and facilitating informed
              decision-making for businesses.
            </div>
          </motion.div>
          <motion.div
            className="services_item"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="services_type">
              <img className='services_icon' src={accrec} alt="logo"></img>
              Accounts Receivable & Accounts Payable
            </div>
            <div className="services_description">
              Service managing accounts payable and receivable, ensuring timely
              payments, accurate invoicing, and optimized cash flow for
              streamlined financial operations.
            </div>
          </motion.div>
          <motion.div
            className="services_item"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="services_type">
              <img className='services_icon' src={gst} alt="logo"></img>
              GST Returns
            </div>
            <div className="services_description">
              Handling GST returns, ensuring compliance and on-time filing.
            </div>
          </motion.div>
          <motion.div
            className="services_item"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="services_type">
              <img className='services_icon' src={payroll} alt="logo"></img>
              Payroll & PAYE
            </div>
            <div className="services_description">
              Managing payroll and PAYE, ensuring accurate salary processing,
              compliance with tax regulations, and timely reporting for
              businesses.
            </div>
          </motion.div>
          {/* <motion.div className="services_item" initial={{opacity:0, x:80}} whileInView={{opacity:1, x:0}} transition={{duration:0.6, ease: "easeOut"}} viewport={{once:true, amount: 0.6}}>
                  <div className="services_type">ACC Levies</div>
                  <div className="services_description">
                      Managing ACC levies, ensuring accurate calculations, compliance, and timely payments, optimizing cost-effectiveness for businesses.
                  </div>
              </motion.div> */}
          <motion.div
            className="services_item"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <div className="services_type">
              <img className='services_icon' src={admin} alt="logo"></img>
              General Office Administration
            </div>
            <div className="services_description">
              Handling general office administritative work, enhancing
              productivity for streamlined business operations.
            </div>
          </motion.div>
        </div>
      </div>
      //   <div id="services_holder">
      //     <motion.div
      //       className="testers"
      //       initial={{ opacity: 0, x: 80 }}
      //       whileInView={{ opacity: 1, x: 0 }}
      //       transition={{ duration: 0.6, ease: "easeOut" }}
      //       viewport={{ once: true }}
      //     ></motion.div>
      //   </div>
    );
}
