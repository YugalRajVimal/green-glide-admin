import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import Input from "../../../components/form/input/InputField";
import Label from "../../../components/form/Label";
import Button from "../../../components/ui/button/Button";
import ComponentCard from "../../../components/common/ComponentCard";

export default function OrganisationPackages() {
  const [packages, setPackages] = useState([
    {
      _id: {
        $oid: "64f100000000000000000001",
      },
      name: "Monthly Plan",
      description: "Perfect for consistent users who want monthly billing.",
      periodType: "monthly",
      daysCount: 30,
      amount: 250,
      features: ["Unlimited projects", "Email support", "Basic analytics"],
      editable: false,
    },
    {
      _id: {
        $oid: "64f100000000000000000002",
      },
      name: "Weekly Plan",
      description: "Great for short-term usage or testing purposes.",
      periodType: "weekly",
      daysCount: 7,
      amount: 150,
      features: ["Access to core features", "Community support"],
      editable: false,
    },
    {
      _id: {
        $oid: "64f100000000000000000003",
      },
      name: "Pay As You Go Plan",
      description: "Best for flexible usage with no commitment.",
      periodType: "payAsYouGo",
      amount: 35,
      features: ["Basic features", "Pay only for what you use"],
      daysCount: 1,
      editable: false,
    },
  ]);

  const toggleEdit = (index: number) => {
    setPackages((prev) =>
      prev.map((pkg, i) =>
        i === index ? { ...pkg, editable: !pkg.editable } : pkg
      )
    );
  };

  const handleChange = (index: number, field: string, value: any) => {
    setPackages((prev) =>
      prev.map((pkg, i) => (i === index ? { ...pkg, [field]: value } : pkg))
    );
  };

  const handleFeatureChange = (
    pkgIndex: number,
    featureIndex: number,
    value: string
  ) => {
    setPackages((prev) =>
      prev.map((pkg, i) =>
        i === pkgIndex
          ? {
              ...pkg,
              features: pkg.features.map((f, fi) =>
                fi === featureIndex ? value : f
              ),
            }
          : pkg
      )
    );
  };

  const handleUpdate = (index: number) => {
    const updatedPackage = packages[index];
    console.log("Updated Package:", updatedPackage);
    // 👉 API call to update package in DB
    toggleEdit(index);
  };

  return (
    <div>
      <PageMeta
        title="Individual Packages"
        description="Edit subscription packages"
      />
      <PageBreadcrumb pageTitle="Individual Packages" />

      <div className="grid grid-cols-1 gap-6">
        {packages.map((pkg, index) => (
          <div key={pkg._id.$oid}>
            <ComponentCard title={pkg.name}>
              {/* Package Name */}
              <div className="mb-3">
                <Label>Package Name</Label>
                <Input
                  type="text"
                  value={pkg.name}
                  disabled={!pkg.editable}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <Label>Description</Label>
                <Input
                  type="text"
                  value={pkg.description}
                  disabled={!pkg.editable}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                />
              </div>

              {/* Period Type */}
              <div className="mb-3">
                <Label>Period Type</Label>
                <Input
                  type="text"
                  value={pkg.periodType}
                  disabled={!pkg.editable}
                  onChange={(e) =>
                    handleChange(index, "periodType", e.target.value)
                  }
                />
              </div>

              {/* Days Count */}
              <div className="mb-3">
                <Label>Days Count</Label>
                <Input
                  type="number"
                  value={pkg.daysCount}
                  disabled={!pkg.editable}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "daysCount",
                      parseInt(e.target.value, 10)
                    )
                  }
                />
              </div>

              {/* Amount */}
              <div className="mb-3">
                <Label>Amount</Label>
                <Input
                  type="number"
                  value={pkg.amount}
                  disabled={!pkg.editable}
                  onChange={(e) =>
                    handleChange(index, "amount", parseFloat(e.target.value))
                  }
                />
              </div>

              {/* Features (3 fields) */}
              <div className="mb-3">
                <Label>Features</Label>
                {pkg.features.map((feature, fi) => (
                  <div key={fi} className="mb-2">
                    <Input
                      type="text"
                      value={feature}
                      disabled={!pkg.editable}
                      onChange={(e) =>
                        handleFeatureChange(index, fi, e.target.value)
                      }
                      placeholder={`Feature ${fi + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                {!pkg.editable ? (
                  <Button
                    onClick={() => toggleEdit(index)}
                    className="rounded bg-blue-600 px-8 py-2 text-white hover:bg-blue-700"
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleUpdate(index)}
                    className="rounded bg-green-600 px-8 py-2 text-white hover:bg-green-700"
                  >
                    Update
                  </Button>
                )}
              </div>
            </ComponentCard>
          </div>
        ))}
      </div>
    </div>
  );
}
