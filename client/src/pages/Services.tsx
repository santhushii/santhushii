import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { services } from '../content/services';
import { getServices } from '../utils/api';
import type { Service } from '../content/services';

const Services: React.FC = () => {
  const [servicesData, setServicesData] = useState<Service[]>(services);

  useEffect(() => {
    getServices()
      .then(res => setServicesData(res.data))
      .catch(() => setServicesData(services));
  }, []);

  return (
    <div className="pt-20">
      <Section
        title="Services"
        subtitle="What I can do for you"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={true} className="h-full">
                <div className="h-full flex flex-col">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <span className="text-purple-400 mr-2">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="outline" className="mt-auto">
                    Get in Touch
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card hover={false}>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how I can help bring your project to life
            </p>
            <Button to="/contact" variant="primary">
              Contact Me
            </Button>
          </Card>
        </motion.div>
      </Section>
    </div>
  );
};

export default Services;
