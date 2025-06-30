'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, QrCode, CreditCard, Building, Copy, Check } from 'lucide-react';
import qrImage from "../../public/qr.jpeg"
export default function Donation() {
  const [donationType, setDonationType] = useState<'quick' | 'other'>('quick');
  const [copied, setCopied] = useState<string | null>(null);
  


  const bankDetails = {
    bankName: "Yes Bank",
    accountName: "Maapa Foundation",
    accountNumber: "044988700000151",
    routingNumber: "021000021",
    swiftCode: "Yesb0000559", 
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C30047] to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Your generosity helps us create lasting change in communities around the world. 
              Every donation, no matter the size, makes a difference.
            </p>
          </div>
        </div>
      </section>

         {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Donation Method</h2>
              <p className="text-lg text-gray-600">Select your preferred way to contribute</p>
            </div>

            {/* Donation Type Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setDonationType('quick')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                    donationType === 'quick'
                      ? 'bg-[#C30047] text-white'
                      : 'text-gray-700 hover:text-[#C30047]'
                  }`}
                >
                  <QrCode className="mr-2 h-5 w-5" />
                  Quick Donation
                </button>
                <button
                  onClick={() => setDonationType('other')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                    donationType === 'other'
                      ? 'bg-[#C30047] text-white'
                      : 'text-gray-700 hover:text-[#C30047]'
                  }`}
                >
                  <Building className="mr-2 h-5 w-5" />
                  Bank Transfer
                </button>
              </div>
            </div>

            {/* Quick Donation - QR Code */}
            {donationType === 'quick' && (
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-8 mb-6">
                  <div className="w-64 h-64 bg-white border-2 border-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    {/* QR Code Placeholder */}
                    <div className="text-center">
                      {/* <QrCode className="h-24 w-24 text-gray-400 mx-auto mb-4" /> */}
                      <Image src={qrImage} alt="qrImage" />
                      <p className="text-gray-500 text-sm">Scan to Donate</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Scan QR Code</h3>
                    <p className="text-gray-600 mb-4">
                      Use your mobile banking app or digital wallet to scan this QR code and make a secure donation.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 inline-block">
                      <p className="text-sm text-gray-600">
                        <strong>Account:</strong> Maapa Foundation<br />
                        <strong>Reference:</strong> DONATION-2025
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="bg-red-100 text-[#C30047] px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors">
                    250
                  </button>
                  <button className="bg-red-100 text-[#C30047] px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors">
                    500
                  </button>
                  <button className="bg-red-100 text-[#C30047] px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors">
                    1000
                  </button>
                  <button className="bg-red-100 text-[#C30047] px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors">
                    Custom
                  </button>
                </div>
              </div>
            )}

            {/* Bank Transfer Details */}
            {donationType === 'other' && (
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-center mb-6">
                  <Building className="h-16 w-16 text-[#C30047] mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bank Transfer Details</h3>
                  <p className="text-gray-600">Use the following information to make a direct bank transfer</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">Bank Name</p>
                          <p className="font-semibold text-gray-900">{bankDetails.bankName}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(bankDetails.bankName, 'bankName')}
                          className="text-[#C30047] hover:text-red-600 transition-colors"
                        >
                          {copied === 'bankName' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">Account Name</p>
                          <p className="font-semibold text-gray-900">{bankDetails.accountName}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(bankDetails.accountName, 'accountName')}
                          className="text-[#C30047] hover:text-red-600 transition-colors"
                        >
                          {copied === 'accountName' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
 
                  </div>

                  <div className="space-y-4">
               
               
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">Account Number</p>
                          <p className="font-semibold text-gray-900">{bankDetails.accountNumber}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                          className="text-[#C30047] hover:text-red-600 transition-colors"
                        >
                          {copied === 'accountNumber' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">IFSC Code</p>
                          <p className="font-semibold text-gray-900">{bankDetails.swiftCode}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(bankDetails.swiftCode, 'swiftCode')}
                          className="text-[#C30047] hover:text-red-600 transition-colors"
                        >
                          {copied === 'swiftCode' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

               
                  </div>
                </div>

                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-[#C30047] mb-2">Important Notes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Please include "DONATION" in the transfer reference</li>
                    <li>• All donations are tax-deductible (tax ID: 12-3456789)</li>
                    <li>• You will receive a donation receipt via email within 24 hours</li>
                    <li>• For international transfers, additional fees may apply</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Security Notice */}
            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <Heart className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">Secure & Transparent</h4>
                  <p className="text-green-700 text-sm">
                    All donations are processed securely and 100% of your contribution goes directly to our programs. 
                    We provide detailed impact reports to show how your donation is making a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-lg text-gray-600">See how your donation can make a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-[#C30047] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl"></span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">School Supplies</h3>
              <p className="text-gray-600">Provides essential school supplies for one child for a month</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-[#C30047] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">50</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600">Covers basic healthcare services for a family of four</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-[#C30047] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">100</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Project</h3>
              <p className="text-gray-600">Supports community development initiatives for a week</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Other Ways to Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Support</h2>
            <p className="text-lg text-gray-600">
              There are many ways to get involved and make a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-[#C30047]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Join our team of dedicated volunteers and contribute your skills and time to our mission.
              </p>
              <button className="text-[#C30047] font-semibold hover:text-red-600 transition-colors">
                Learn More →
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-[#C30047]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Partnership</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to create meaningful impact while achieving your corporate social responsibility goals.
              </p>
              <button className="text-[#C30047] font-semibold hover:text-red-600 transition-colors">
                Contact Us →
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-[#C30047]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fundraise</h3>
              <p className="text-gray-600 mb-4">
                Organize your own fundraising event or campaign to support our cause in your community.
              </p>
              <button className="text-[#C30047] font-semibold hover:text-red-600 transition-colors">
                Get Started →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}