"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import BankInfoModal from "../../components/bank-info/bank-info-modal";
import { getAllBanks } from "@/app/services/bank.service";
import { Bank } from "@/app/types";
import BankInfoList from "../../components/bank-info/bank-info-list";

const BankInfoManagement = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [banks, setBanks] = useState<Bank[]>([]);
   const [selectedBank, setSelectedBank] = useState<Bank | null>(null);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const fetchBanks = async () => {
    try {
      const data = await getAllBanks();
      setBanks(data);
    } catch (error) {
      console.error("Failed to fetch bank data", error);
    }
  };

  useEffect(() => {
    fetchBanks();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Bank Info Management</h1>
          <p className="opacity-50">
            Manage destination accounts for customer transfers.
          </p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsModalOpen(true)}>
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>
      <BankInfoList banks={banks}  />
      <BankInfoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default BankInfoManagement;
